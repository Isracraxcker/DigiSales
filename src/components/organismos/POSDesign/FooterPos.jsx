import styled from "styled-components";
import { Device } from "../../../styles/breakpoints";
import { Btn1 } from "../../moleculas/Btn1";
import { Trash2 } from "lucide-react";
import { useCartVentasStore } from "../../../store/CartVentasStore";
export function FooterPos() {

 const {resetState} = useCartVentasStore()
  return (
    <Footer>
      <article className="content">
        <Btn1 bgcolor={"#ff0000"} color={"255,255,255"} funcion={resetState} titulo="Eliminar venta" icono={<Trash2 size={20} />} />
        <Btn1 titulo="Ver ventas del día y Devoluciones" />
      </article>
    </Footer>
  );
}
const Footer = styled.section`
  grid-area: footer;
  /* background-color: rgba(57, 231, 26, 0.5); */
  display: none;

  @media ${Device.desktop} {
    display: flex;
  }
  .content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;