import styled from "styled-components";
import { Device } from "../../../styles/breakpoints";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEmpresaStore } from "../../../store/EmpresaStore";
import { useCajasStore } from "../../../store/CajasStore";
import { useSucursalesStore } from "../../../store/SucursalesStore";
import { BarLoader } from "react-spinners";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ButtonDashed } from "../../ui/buttons/ButtonDashed";

export const ListSucursales = () => {
  const queryClient = useQueryClient();
  const {
    mostrarCajasXSucursal,
    setStateSucursal,
    setAccion,
    selectSucursal,
    eliminarSucursal,
  } = useSucursalesStore();

  const { dataempresa } = useEmpresaStore();
  const {
    setStateCaja,
    setCajaSelectItem,
    setAccion: setAccionCaja,
    eliminarCaja,
  } = useCajasStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["mostrar Cajas XSucursal"],
    queryFn: () => mostrarCajasXSucursal({ id_empresa: dataempresa?.id }),
    enabled: !!dataempresa,
  });
  if (isLoading) return <BarLoader color="#05093d" />;
  if (error) return <span>error...{error.message}</span>;

  return (
    <Container>
      {data?.map((sucursal, index) => {
        return (
          <Sucursal key={index}>
            <SucursalHeader>
              <Acciones $right="0px" $top="0px">
                {sucursal?.delete && (
                  <Icon
                    icon="wpf:delete"
                    width="15"
                    height="15"
                    className="deleteicon"
                  />
                )}

                <Icon icon="mdi:edit" width="20" height="20" />
              </Acciones>
              <SucursalTitle>SUCURSAL: {sucursal.nombre}</SucursalTitle>
            </SucursalHeader>
            <CajaList>
              {sucursal.caja?.map((caja, index) => {
                return (
                  <CajaItem key={index}>
                    <CajaInfo>
                      <FechaCreacion>{caja.fecha_creacion}</FechaCreacion>
                    </CajaInfo>
                    <CajaDescripcion>{caja.descripcion}</CajaDescripcion>
                    <Acciones $right="10px" $bottom="10px">
                      {caja?.delete && (
                        <Icon icon="wpf:delete" width="15" height="15" />
                      )}

                      <Icon icon="mdi:edit" width="20" height="20" />
                    </Acciones>
                  </CajaItem>
                );
              })}
            </CajaList>
            <ButtonDashed title={"Agregar caja"} />
          </Sucursal>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  column-count: 1;
  column-gap: 20px;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  @media ${Device.tablet} {
    column-count: 2;
  }
  @media ${Device.desktop} {
    column-count: 3;
  }
`;
const Acciones = styled.section`
  position: absolute;
  right: ${(props) => props.$right};
  top: ${(props) => props.$top};
  bottom: ${(props) => props.$bottom};
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  .deleteicon {
    &:hover {
      color: #c22929 !important;
    }
  }
`;
const Sucursal = styled.div`
  background-color: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.bordercolorDash};
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  break-inside: avoid;
  margin-bottom: 20px;
  position: relative;
`;
const SucursalHeader = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const SucursalTitle = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  top: 10px;
  /* Evitar desbordes */
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`;

const CajaList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const CajaItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 2px solid ${({ theme }) => theme.bg};
  padding: 10px;
  border-radius: 8px;
  justify-content: space-between;
  position: relative;
`;
const CajaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FechaCreacion = styled.span`
  font-size: 14px;
  color: #9ca3af;
  text-align: start;
`;
const CajaDescripcion = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-align: center;
`;
