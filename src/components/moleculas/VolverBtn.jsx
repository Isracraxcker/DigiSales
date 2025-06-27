import { Icon } from "@iconify/react/dist/iconify.js";
import { ChevronLeft } from "lucide-react";
import styled from "styled-components";
export function VolverBtn({ funcion }) {
  return (
    <Container onClick={funcion}>
      <ChevronLeft className="icono" />
      <span>Volver</span>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 8px;
  .icono {
    font-size: 25px;
  }
  margin-bottom: 30px;
`;
