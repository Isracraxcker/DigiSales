/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { AccionTabla } from "../../../index";
import { v } from "../../../styles/variables";
import { Icon } from "@iconify/react";
export function ContentAccionesTabla({funcionEditar, funcionEliminar}) {
  return (
    <Container>
      <AccionTabla funcion = {funcionEditar} fontSize="18px" color="#5c5858" icono={<v.iconeditarTabla/>} />
      <AccionTabla funcion={funcionEliminar} fontSize="20px" color="#8f0000" icono={<Icon icon="fluent-emoji-high-contrast:skull" />} />
    </Container>
  );
}
const Container = styled.div`
 display: flex;
  flex-wrap: wrap;
  justify-content:center;
  gap:10px;
  @media (max-width: 48em) {
    justify-content:end;
  }
`;