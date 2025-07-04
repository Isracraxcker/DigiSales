import styled from "styled-components";
import { GiPadlock } from "react-icons/gi";
import { ShieldCheck } from "lucide-react";
export function Footer() {
  return (
    <Container>
      <section className="lock">
        <ShieldCheck size={30}  />
        <span>
          Esta es una página segura de AICODIGI Si tienes dudas sobre la
          autenticidad de la web, comunícate con
          <br /> nosotros a través de nuestros medios digitales.
        </span>
      </section>
      <section className="derechos">
        <span>DigiSales S.A</span>
        <div className="separador"></div>
        <span>Todos los derechos reservados</span>
        <div className="separador"></div>
        <span>© 2025 AICODIGI - Andy Jaramillo</span>
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12.2px;
  color: #91a4b7;
  gap: 5px;
  margin: 10px;
  .lock {
    border-bottom: 1px solid rgba(145, 164, 183, 0.3);
    gap: 5px;
    display: flex;
    align-items: center;
  }
  .derechos {
    display: flex;
    justify-content: space-between;
    .separador {
      width: 1px;
      background-color: rgba(145, 164, 183, 0.3);
      margin-top: 4px;
      height: 80%;
      align-items: center;
      display: flex;
    }
    span {
      margin-top: 5px;
    }
  }
`;
