"use client";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import styled from "styled-components";
import { v } from "../../../styles/variables";
import {
  InputText,
  Btn1,
  Icono,
  Spinner1,
  useSucursalesStore,
  EditarSucursal,
  useEmpresaStore,
  ConvertirCapitalize,
} from "../../../index";
import { useForm } from "react-hook-form";
import { CirclePicker } from "react-color";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function RegistrarSucursal({}) {
  const queryClient = useQueryClient();
  const {
    accion,
    sucursalesItemSelect,
    setStateSucursal,
    insertarSucursal,
    editarSucursal,
  } = useSucursalesStore();
  const { dataempresa } = useEmpresaStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const insertar = async (data) => {
    if (accion === "Editar") {
      const p = {
        id: sucursalesItemSelect?.id,
        nombre: ConvertirCapitalize(data.nombre),
        direccion_fiscal: data.direccion_fiscal,
      };
      await EditarSucursal(p);
    } else {
      const p = {
        nombre: ConvertirCapitalize(data.nombre),
        direccion_fiscal: data.direccion_fiscal,
        id_empresa: dataempresa?.id,
      };
      await insertarSucursal(p);
    }
  };

  const { isPending, mutate: doInsertar } = useMutation({
    mutationKey: ["insertar sucursal"],
    mutationFn: insertar,
    onError: (error) => {
      if (
        error.message.includes("duplicate key value") &&
        error.message.includes("unique_nombre_id_empresa_sucursal")
      ) {
        toast.error("Ya existe una sucursal con ese nombre para esta empresa.");
      } else {
        toast.error(`Error: ${error.message}`);
      }
    },
    onSuccess: () => {
      toast.success("Sucursal registrada correctamente");
      queryClient.invalidateQueries(["mostrar Cajas XSucursal"]);
      setStateSucursal(false);
    },
  });

  const handlesub = (data) => {
    doInsertar(data);
  };

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
                  ? "Editar Sucursal"
                  : "Registrar Nueva Sucursal"}
              </h1>
            </section>
            <CloseButton onClick={() => setStateSucursal(false)}>✕</CloseButton>
          </CardHeader>

          <CardContent>
            <form className="formulario" onSubmit={handleSubmit(handlesub)}>
              <div className="form-subcontainer">
                <SectionTitle>📝 Información de la Sucursal</SectionTitle>

                <article>
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      className="form__field"
                      defaultValue={sucursalesItemSelect?.nombre}
                      type="text"
                      placeholder="Sucursal"
                      {...register("nombre", {
                        required: true,
                      })}
                    />
                    <label className="form__label">Sucursal</label>
                    {errors.nombre?.type === "required" && (
                      <ErrorMessage>Campo requerido</ErrorMessage>
                    )}
                  </InputText>
                </article>

                <article>
                  <InputText icono={<v.iconoflechaderecha />}>
                    <input
                      className="form__field"
                      defaultValue={
                        accion === "Editar"
                          ? sucursalesItemSelect?.direccion_fiscal
                          : ""
                      }
                      type="text"
                      placeholder="direccion fiscal"
                      {...register("direccion_fiscal", {
                        required: true,
                      })}
                    />
                    <label className="form__label">Direccion fiscal</label>
                    {errors.direccion_fiscal?.type === "required" && (
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
