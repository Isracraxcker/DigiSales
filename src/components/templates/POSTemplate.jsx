import styled from "styled-components";
import { Device } from "../../styles/breakpoints";
import { AreaDetalleventaPos, AreaTecladoPos, HeaderPos } from "../../index";
export function POSTemplate() {
  return (
    <Container>
      <HeaderPos />
      <Main>
        <Toaster position="top-center" />
        <AreaDetalleventaPos />
        <AreaTecladoPos />
      </Main>
      <FooterPos />
      <MenuFlotante />
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 60px);
  padding: 10px;
  padding-top: 50px;
  display: grid;
  gap: 10px;
  grid-template:
    "header" 220px
    "main" auto;

  @media ${Device.desktop} {
    grid-template:
      "header header" 140px
      "main main"
      "footer footer" 60px;
  }
`;

const Main = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
  gap: 10px;

  @media ${Device.desktop} {
    flex-direction: row;
  }
`;
