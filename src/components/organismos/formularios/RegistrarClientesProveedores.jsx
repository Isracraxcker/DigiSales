"use client";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { v } from "../../../styles/variables";
import {
  InputText,
  Btn1,
  useCategoriasStore,
  Icono,
  ConvertirCapitalize,
  Spinner1,
  useClientesProveedoresStore,
} from "../../../index";
import { useForm } from "react-hook-form";
import { CirclePicker } from "react-color";
import { useEmpresaStore } from "../../../store/EmpresaStore";
import { useMutation } from "@tanstack/react-query";

export function RegistrarClientesProveedores({
  onClose,
  dataSelect,
  accion,
  setIsExploding,
}) {
  const { tipo } = useClientesProveedoresStore();
  const { insertarCliPro, editarCliPro } = useClientesProveedoresStore();
  const { dataempresa } = useEmpresaStore();

  function elegirColor(color) {
    setColor(color.hex);
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { isPending, mutate: doInsertar } = useMutation({
    mutationFn: insertar,
    mutationKey: "insertar clientes proveedores mutation",
    onError: (err) => console.log("El error", err.message),
    onSuccess: () => cerrarFormulario(),
  });

  const handlesub = (data) => {
    doInsertar(data);
  };

  const cerrarFormulario = () => {
    onClose();
    setIsExploding(true);
  };

  async function insertar(data) {
    if (accion === "Editar") {
      const p = {
        _id: dataSelect.id,
        _nombres: ConvertirCapitalize(data.nombres),
        _id_empresa: dataempresa?.id,
        _direccion: data.direccion,
        _telefono: data.telefono,
        _email: data.email,
        _identificador_nacional: data.identificador_nacional,
        _identificador_fiscal: data.identificador_fiscal,
        _tipo: tipo,
      };
      await editarCliPro(p);
    } else {
      const p = {
        _nombres: ConvertirCapitalize(data.nombres),
        _id_empresa: dataempresa?.id,
        _direccion: data.direccion,
        _telefono: data.telefono,
        _email: data.email,
        _identificador_nacional: data.identificador_nacional,
        _identificador_fiscal: data.identificador_fiscal,
        _tipo: tipo,
      };

      await insertarCliPro(p);
    }
  }

  useEffect(() => {
    if (accion === "Editar") {
    }
  }, []);

  return (
    <Container>
      {isPending ? (
        <LoadingContainer>
          <Spinner1 />
        </LoadingContainer>
      ) : (
        <CardContainer className="card-contenedor">
          <CardHeader className="headers">
            <section>
              <h1>
                {accion == "Editar"
                  ? "Editar " + tipo
                  : "Registrar nuevo " + tipo}
              </h1>
            </section>
            <CloseButton onClick={onClose}>✕</CloseButton>
          </CardHeader>

          <CardContent>
            <form className="formulario" onSubmit={handleSubmit(handlesub)}>
              <div className="form-subcontainer">
                <article>
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      className="form__field"
                      defaultValue={dataSelect.nombres}
                      type="text"
                      placeholder="Nombres"
                      {...register("nombres", {
                        required: true,
                      })}
                    />
                    <label className="form__label">Nombres</label>
                    {errors.nombres?.type === "required" && (
                      <ErrorMessage>Campo requerido</ErrorMessage>
                    )}
                  </InputText>
                </article>

                <article>
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      className="form__field"
                      defaultValue={dataSelect.direccion}
                      type="text"
                      placeholder="direccion"
                      {...register("direccion", {
                        required: true,
                      })}
                    />
                    <label className="form__label">Dirección</label>
                    {errors.direccion?.type === "required" && (
                      <ErrorMessage>Campo requerido</ErrorMessage>
                    )}
                  </InputText>
                </article>
                <article>
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      className="form__field"
                      defaultValue={dataSelect.telefono}
                      type="text"
                      placeholder="telefono"
                      {...register("telefono", {
                        required: true,
                      })}
                    />
                    <label className="form__label">Teléfono</label>
                    {errors.telefono?.type === "required" && (
                      <p>Campo requerido</p>
                    )}
                  </InputText>
                </article>
                <article>
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      className="form__field"
                      defaultValue={dataSelect.email}
                      type="text"
                      placeholder="email"
                      {...register("email", {
                        required: true,
                      })}
                    />
                    <label className="form__label">Email</label>
                    {errors.email?.type === "required" && (
                      <p>Campo requerido</p>
                    )}
                  </InputText>
                </article>
                <article>
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      className="form__field"
                      defaultValue={dataSelect.identificador_nacional}
                      type="text"
                      placeholder="identificador_nacional"
                      {...register("identificador_nacional", {
                        required: true,
                      })}
                    />
                    <label className="form__label">
                      Identificador nacional
                    </label>
                    {errors.identificador_nacional?.type === "required" && (
                      <p>Campo requerido</p>
                    )}
                  </InputText>
                </article>
                <article>
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      className="form__field"
                      defaultValue={dataSelect.identificador_fiscal}
                      type="text"
                      placeholder="identificador_fiscal"
                      {...register("identificador_fiscal", {
                        required: true,
                      })}
                    />
                    <label className="form__label">identificador fiscal</label>
                    {errors.identificador_fiscal?.type === "required" && (
                      <p>Campo requerido</p>
                    )}
                  </InputText>
                </article>

                <ButtonContainer>
                  <Btn1
                    icono={<v.iconoguardar />}
                    titulo="Guardar"
                    bgcolor="#F9D70B"
                  />
                </ButtonContainer>
              </div>
            </form>
          </CardContent>
        </CardContainer>
      )}
    </Container>
  );
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
`;

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
  max-width: 600px;
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
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(
    135deg,
    rgba(252, 96, 39, 0.1),
    rgba(249, 215, 11, 0.1)
  );

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => theme.text};
  }
`;

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
`;

const CardContent = styled.div`
  padding: 32px;
  overflow-y: auto;
  flex: 1;

  .formulario {
    .form-subcontainer {
      gap: 24px;
      display: flex;
      flex-direction: column;

      .colorContainer {
        .colorPickerContent {
          padding-top: 15px;
          min-height: 50px;
        }
      }
    }
  }
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.text};
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(252, 96, 39, 0.3);
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 2px dashed #f9d70b;
  border-radius: 15px;
  background-color: rgba(249, 215, 11, 0.1);
  padding: 20px;
  margin-bottom: 24px;
`;

const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.05);

  .ContentImage {
    overflow: hidden;
    border-radius: 10px;
    max-width: 200px;
    max-height: 120px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const EmptyImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;

  span {
    font-size: 14px;
  }
`;

const ImageUploadButton = styled.div`
  display: flex;
  justify-content: center;

  input {
    display: none;
  }
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;

  svg {
    font-size: 25px;
    color: ${({ theme }) => theme.text};
  }

  span {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
  }
`;

const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .colorPickerContent {
    padding: 16px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
`;

const ColorPreview = styled.div`
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ErrorMessage = styled.p`
  color: #f9184c;
  font-size: 14px;
  margin-top: 4px;
`;
