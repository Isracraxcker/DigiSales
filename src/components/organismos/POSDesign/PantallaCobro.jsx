import { ChevronLeft, Eye, EyeOff, Trash2 } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";
import { useCartVentasStore } from "../../../store/CartVentasStore";

export function PantallaCobro() {
  const [stateVerTicket, setStateVerTicket] = useState(false);
  const { setStatePantallaCobro } = useCartVentasStore();
  return (
    <Container>
      <section className="contentingresopago">
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  background-color: ${({ theme }) => theme.bgtotal};

  .contentingresopago {
    .contentverticket {
      align-self: flex-end;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      span {
        font-weight: 70px;
        font-size: 1.1em;
      }
      .icono {
      }
    }
  }
`;
