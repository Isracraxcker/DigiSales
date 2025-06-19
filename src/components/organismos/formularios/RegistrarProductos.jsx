"use client"

/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components"
import { v } from "../../../styles/variables"
import {
  InputText,
  Btn1,
  useProductosStore,
  ContainerSelector,
  Switch1,
  Selector,
  useSucursalesStore,
  ListaDesplegable,
  useCategoriasStore,
  Btngenerarcodigo,
  useAlmacenesStore,
  Spinner1,
} from "../../../index"
import { useForm } from "react-hook-form"
import { useEmpresaStore } from "../../../store/EmpresaStore"
import { useMutation, useQuery } from "@tanstack/react-query"
import { Device } from "../../../styles/breakpoints"
import { useEffect, useRef, useState } from "react"
import { Checkbox1 } from "../Checkbox1"
import Swal from "sweetalert2"

export function RegistrarProductos({ onClose, dataSelect, accion, setIsExploding, state }) {
  if (!state) return

  //validar checkboxs
  const [isChecked1, setIsChecked1] = useState(true)
  const [isChecked2, setIsChecked2] = useState(false)
  const [sevendepor, setSevendepor] = useState("UNIDAD")
  const handleCheckboxChange = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      setIsChecked1(true)
      setIsChecked2(false)
      setSevendepor("UNIDAD")
    } else {
      setIsChecked1(false)
      setIsChecked2(true)
      setSevendepor("GRANEL")
    }
  }

  const { insertarProductos, editarProductos, generarCodigo, codigogenerado, refetchs } = useProductosStore()
  const { dataempresa } = useEmpresaStore()
  const { insertarStockAlmacenes, mostrarAlmacen, dataalmacen, eliminarAlmacen } = useAlmacenesStore()
  const [stateInventarios, setStateInventarios] = useState(false)
  const [stateEnabledStock, setStateEnabledStock] = useState(false)
  const [stateSucursalesLista, setStateSucursalesLista] = useState(false)
  const [stateCategoriasLista, setStateCategoriasLista] = useState(false)
  const inputcodigointerno = useRef()
  const { sucursalesItemSelect, dataSucursales, selectSucursal } = useSucursalesStore()
  const { datacategorias, selectCategoria, categoriaItemSelect } = useCategoriasStore()
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [
      "mostrar stock almacen x sucursal",
      { id_producto: dataSelect.id, id_sucursal: sucursalesItemSelect.id },
    ],
    queryFn: () =>
      mostrarAlmacen({
        id_sucursal: sucursalesItemSelect.id,
        id_producto: dataSelect.id,
      }),
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const { isPending, mutate: doInsertar } = useMutation({
    mutationFn: insertar,
    mutationKey: "insertar marca",
    onError: (err) => console.log("El error", err.message),
    onSuccess: () => cerrarFormulario(),
  })
  const handlesub = (data) => {
    doInsertar(data)
  }
  const cerrarFormulario = () => {
    onClose()
    setIsExploding(true)
  }
  async function insertar(data) {
    validarVacios(data)
    if (accion === "Editar") {
      const p = {
        _id: dataSelect.id,
        _nombre: data.nombre,
        _precio_venta: Number.parseFloat(data.precio_venta),
        _precio_compra: Number.parseFloat(data.precio_compra),
        _id_categoria: categoriaItemSelect.id,
        _codigo_barras: randomCodebarras ? randomCodebarras : codigogenerado,
        _codigo_interno: randomCodeinterno ? randomCodeinterno : codigogenerado,
        _id_empresa: dataempresa.id,
        _sevende_por: sevendepor,
        _maneja_inventarios: stateInventarios,
      }
      console.log(p)
      await editarProductos(p)
      if (stateInventarios) {
        if (dataalmacen == null) {
          const palmacenes = {
            id_sucursal: sucursalesItemSelect.id,
            id_producto: dataSelect.id,
            stock: Number.parseFloat(data.stock),
            stock_minimo: Number.parseFloat(data.stock_minimo),
          }
          await insertarStockAlmacenes(palmacenes)
        }
      }
    } else {
      const p = {
        _nombre: data.nombre,
        _precio_venta: Number.parseFloat(data.precio_venta),
        _precio_compra: Number.parseFloat(data.precio_compra),
        _id_categoria: categoriaItemSelect.id,
        _codigo_barras: randomCodebarras ? randomCodebarras : codigogenerado,
        _codigo_interno: randomCodeinterno ? randomCodeinterno : codigogenerado,
        _id_empresa: dataempresa.id,
        _sevende_por: sevendepor,
        _maneja_inventarios: stateInventarios,
        _maneja_multiprecios: false,
      }

      const id_producto_nuevo = await insertarProductos(p)
      if (stateInventarios) {
        const palmacenes = {
          id_sucursal: sucursalesItemSelect.id,
          id_producto: id_producto_nuevo,
          stock: Number.parseFloat(data.stock),
          stock_minimo: Number.parseFloat(data.stock_minimo),
        }

        await insertarStockAlmacenes(palmacenes)
      }
    }
  }

  //#region validar check inventarios
  function checkUseInventarios() {
    if (accion === "Editar") {
      if (dataalmacen) {
        if (stateInventarios) {
          Swal.fire({
            title: "¿Estás seguro(a)?",
            text: "Si desactiva esta opción se eliminara el stock!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar",
          }).then(async (result) => {
            if (result.isConfirmed) {
              setStateInventarios(false)
              await eliminarAlmacen({ id: dataalmacen.id })
            }
          })
        } else {
          setStateInventarios(true)
        }
      } else {
        setStateInventarios(!stateInventarios)
      }
    } else {
      setStateInventarios(!stateInventarios)
    }
  }
  //#endregion
  //#region validar vacios
  function validarVacios(data) {
    if (!randomCodeinterno) {
      generarCodigoInterno()
    }
    if (!randomCodebarras) {
      generarCodigoBarras()
    }
    if (data.precio_venta.trim() === "") {
      data.precio_venta = 0
    }
    if (data.precio_compra.trim() === "") {
      data.precio_compra = 0
    }
    if (stateInventarios) {
      if (!dataalmacen) {
        if (data.stock.trim() === "") {
          data.stock = 0
        }
        if (data.stock_minimo.trim() === "") {
          data.stock_minimo = 0
        }
      }
    }
  }
  //#endregion
  //#region generar codigo automatico
  const [randomCodeinterno, setRandomCodeinterno] = useState("")
  const [randomCodebarras, setRandomCodebarras] = useState("")
  function generarCodigoBarras() {
    generarCodigo()
    setRandomCodebarras(codigogenerado)
  }
  function generarCodigoInterno() {
    generarCodigo()
    setRandomCodeinterno(codigogenerado)
  }
  const handleChangeinterno = (event) => {
    setRandomCodeinterno(event.target.value)
  }
  const handleChangebarras = (event) => {
    setRandomCodebarras(event.target.value)
  }
  //#endregion

  //#region validar_accion
  useEffect(() => {
    if (accion != "Editar") {
      generarCodigoInterno()
    } else {
      setRandomCodeinterno(dataSelect.codigo_interno)
      setRandomCodebarras(dataSelect.codigo_barras)
      dataSelect.sevende_por === "UNIDAD" ? handleCheckboxChange(1) : handleCheckboxChange(0)
      dataSelect.maneja_inventarios ? setStateInventarios(true) : setStateInventarios(false)
      dataSelect.maneja_inventarios ? setStateEnabledStock(true) : setStateEnabledStock(false)
    }
  }, [])
  //#endregion validar_accion

  return (
    <Container>
      {isPending ? (
        <LoadingContainer>
          <Spinner1/>
        </LoadingContainer>
      ) : (
        <CardContainer className="card-contenedor">
          <CardHeader className="headers">
            <section>
              <h1>{accion == "Editar" ? "Editar productos" : "REGISTRAR NUEVO PRODUCTO"}</h1>
            </section>
            <CloseButton
              onClick={() => {
                refetchs()
                onClose()
              }}
            >
              ✕
            </CloseButton>
          </CardHeader>

          <CardContent>
            <form className="formulario" onSubmit={handleSubmit(handlesub)}>
              <section className="seccion1">
                <SectionTitle>📦 Información del Producto</SectionTitle>
                <article>
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      className="form__field"
                      defaultValue={dataSelect.nombre}
                      type="text"
                      placeholder="nombre"
                      {...register("nombre", {
                        required: true,
                      })}
                    />
                    <label className="form__label">nombre</label>
                    {errors.nombre?.type === "required" && <p>Campo requerido</p>}
                  </InputText>
                </article>
                <article>
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      step="0.01"
                      className="form__field"
                      defaultValue={dataSelect.precio_venta}
                      type="number"
                      placeholder="precio venta"
                      {...register("precio_venta")}
                    />
                    <label className="form__label">precio venta</label>
                  </InputText>
                </article>
                <article>
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      step="0.01"
                      className="form__field"
                      defaultValue={dataSelect.precio_compra}
                      type="number"
                      placeholder="precio compra"
                      {...register("precio_compra")}
                    />
                    <label className="form__label">precio compra</label>
                  </InputText>
                </article>
                <article className="contentPadregenerar">
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      className="form__field"
                      value={randomCodebarras}
                      onChange={handleChangebarras}
                      type="text"
                      placeholder="codigo de barras"
                    />
                    <label className="form__label">codigo de barras</label>
                  </InputText>
                  <ContainerBtngenerar>
                    <Btngenerarcodigo titulo="Generar" funcion={generarCodigoBarras} />
                  </ContainerBtngenerar>
                </article>
                <article className="contentPadregenerar">
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      className="form__field"
                      value={randomCodeinterno}
                      onChange={handleChangeinterno}
                      type="text"
                      placeholder="codigo interno"
                    />
                    <label className="form__label">codigo interno</label>
                  </InputText>
                  <ContainerBtngenerar>
                    <Btngenerarcodigo titulo="Generar" funcion={generarCodigoInterno} />
                  </ContainerBtngenerar>
                </article>
              </section>

              <section className="seccion2">
                <SectionTitle>⚙️ Configuración</SectionTitle>
                <label>Se vende por: </label>
                <ContainerSelector>
                  <label>UNIDAD </label>
                  <Checkbox1 isChecked={isChecked1} onChange={() => handleCheckboxChange(1)} />
                  <label>GRANEL(decimales) </label>
                  <Checkbox1 isChecked={isChecked2} onChange={() => handleCheckboxChange(2)} />
                </ContainerSelector>

                <ContainerSelector>
                  <label>Categoria: </label>
                  <Selector
                    state={stateCategoriasLista}
                    funcion={() => setStateCategoriasLista(!stateCategoriasLista)}
                    texto1="🏬"
                    texto2={categoriaItemSelect?.nombre}
                    color="#fc6027"
                  />
                  <ListaDesplegable
                    funcion={selectCategoria}
                    state={stateCategoriasLista}
                    data={datacategorias}
                    top="4rem"
                    setState={() => setStateCategoriasLista(!stateCategoriasLista)}
                  />
                </ContainerSelector>
                <ContainerSelector>
                  <label>Controlar stock: </label>
                  <Switch1 state={stateInventarios} setState={checkUseInventarios} />
                </ContainerSelector>
                {stateInventarios && (
                  <ContainerStock>
                    <ContainerSelector>
                      <label>Sucursal: </label>
                      <Selector
                        state={stateSucursalesLista}
                        funcion={() => setStateSucursalesLista(!stateSucursalesLista)}
                        texto1="🏬"
                        texto2={sucursalesItemSelect?.nombre}
                        color="#fc6027"
                      />

                      <ListaDesplegable
                        refetch={refetch}
                        funcion={selectSucursal}
                        state={stateSucursalesLista}
                        data={dataSucursales}
                        top="4rem"
                        setState={() => setStateSucursalesLista(!stateSucursalesLista)}
                      />
                    </ContainerSelector>
                    {stateEnabledStock && (
                      <ContainerMensajeStock>
                        <span>💀 para editar el stock vaya al módulo de kardex</span>
                      </ContainerMensajeStock>
                    )}

                    <article>
                      <InputText icono={<v.iconoflechaderecha />}>
                        <input
                          disabled={stateEnabledStock}
                          className="form__field"
                          defaultValue={dataalmacen?.stock}
                          step="0.01"
                          type="number"
                          placeholder="stock"
                          {...register("stock")}
                        />
                        <label className="form__label">stock</label>
                      </InputText>
                    </article>
                    <article>
                      <InputText icono={<v.iconoflechaderecha />}>
                        <input
                          disabled={stateEnabledStock}
                          className="form__field"
                          defaultValue={dataalmacen?.stock_minimo}
                          step="0.01"
                          type="number"
                          placeholder="stock minimo"
                          {...register("stock_minimo")}
                        />
                        <label className="form__label">stock minimo</label>
                      </InputText>
                    </article>
                  </ContainerStock>
                )}
              </section>

              <ButtonContainer>
                <Btn1 icono={<v.iconoguardar />} titulo="Guardar" bgcolor="#F9D70B" />
              </ButtonContainer>
            </form>
          </CardContent>
        </CardContainer>
      )}
    </Container>
  )
}

// Styled Components actualizados para formato Card
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(10, 9, 9, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(2px);
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px; /* ajusta según el espacio que necesites */
  width: 100%;
`;


const CardContainer = styled.div`
  background: ${({ theme }) => theme.bgtotal};
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, rgba(252, 96, 39, 0.1), rgba(249, 215, 11, 0.1));

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => theme.text};
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: rotate(90deg);
  }
`

const CardContent = styled.div`
  padding: 32px;
  overflow-y: auto;
  flex: 1;

  .formulario {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    
    @media ${Device.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .seccion1,
    .seccion2 {
      gap: 24px;
      display: flex;
      flex-direction: column;
    }
    
    .contentPadregenerar {
      position: relative;
    }
  }
`

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.text};
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(252, 96, 39, 0.3);
`

const ButtonContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const ContainerStock = styled.div`
  border: 1px solid rgba(240, 104, 46, 0.9);
  display: flex;
  border-radius: 15px;
  padding: 20px;
  flex-direction: column;
  background-color: rgba(240, 127, 46, 0.05);
  gap: 16px;
`

const ContainerBtngenerar = styled.div`
  position: absolute;
  right: 0;
  top: 10%;
`

const ContainerMensajeStock = styled.div`
  text-align: center;
  color: #f9184c;
  background-color: rgba(249, 24, 61, 0.2);
  border-radius: 10px;
  padding: 12px;
  font-weight: 600;
  border: 1px solid rgba(249, 24, 61, 0.3);
`
