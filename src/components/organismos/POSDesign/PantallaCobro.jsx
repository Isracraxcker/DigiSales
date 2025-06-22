
import { ChevronLeft, Eye, EyeOff, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useCartVentasStore } from "../../../store/CartVentasStore";
import { IngresoCobro } from "./IngresoCobro";

export function PantallaCobro() {
  const [stateVerTicket, setStateVerTicket] = useState(false);
  const { setStatePantallaCobro } = useCartVentasStore();
  const ingresoCobro = useRef();
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (ingresoCobro.current) {
          ingresoCobro.current.mutateAsync();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  },[])
  return (
    <Container>
      <section className="contentingresocobro">
        <article
          className="contentverticket"
          onClick={() => setStateVerTicket(!stateVerTicket)}
        >
          <span>{stateVerTicket ? "ocultar" : "mostrar"} Ticket</span>
          {stateVerTicket ? (
            <EyeOff className="icono" size={25} />
          ) : (
            <Eye className="icono" size={25} />
          )}
        </article>
        <IngresoCobro ref={ingresoCobro} />
        <article className="contentverticket" onClick={setStatePantallaCobro}>
          <ChevronLeft />
          <span>Volver</span>
        </article>
      </section>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  background-color: ${({ theme }) => theme.bgtotal};
  .contentingresocobro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: calc(100% - 10rem);
    .contentverticket {
      align-self: flex-end;
      cursor: pointer;
      display: flex;
      gap: 10px;
      align-items: center;
      span {
        font-weight: 700px;
        font-size: 18px;
      }
      .icono {
        font-size: 30px;
      }
    }
  }
`;
