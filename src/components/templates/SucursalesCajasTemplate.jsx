import styled from "styled-components";
import { ButtonDashed } from "../ui/buttons/ButtonDashed";
import { ListSucursales } from "../organismos/SucursalesDesign/ListSucursales";
import { RegistrarSucursal } from "../organismos/formularios/RegistrarSucursal";
import { useSucursalesStore } from "../../store/SucursalesStore";

export const SucursalesCajasTemplate = () => {
  const {stateSucursal,setStateSucursal} = useSucursalesStore()
  return (
    <Container>
     
      {
        stateSucursal && <RegistrarSucursal />  
      }
      <section className="area1">
        <Header>
          <Title>Sucursales y Cajas</Title>
          <Subtitle>Gestiona tus sucursales y cajas</Subtitle>
          <ButtonDashed title="Nueva Sucursal" funcion={()=>setStateSucursal(true)} />
        </Header>
      </section>

      <section className="area2">
        <ListSucursales />
      </section>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  position: relative;
  grid-template:
    "area1" 300px
    "area2" auto;
  .area1 {
    grid-area: area1;
    display: flex;
    flex-direction: column;
  }
  .area2 {
    grid-area: area2;
    padding-bottom: 20px;
  }
`;
const Header = styled.div`
  margin-bottom: 20px;
  text-align: center;
  justify-content: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;
const Subtitle = styled.p`
  font-size: 18px;
  color: #6b7280;
  margin: 5px 0 0;
`;
