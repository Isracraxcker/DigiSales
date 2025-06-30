import styled from "styled-components";

export function AvisoLegal() {
  return (
    <TextoLegal>
      Al continuar, aceptas nuestros{" "}
      <Enlace href="/terminos" target="_blank" rel="noopener noreferrer">
        Términos de uso
      </Enlace>{" "}
      y nuestras{" "}
      <Enlace href="/privacidad" target="_blank" rel="noopener noreferrer">
        Condiciones de privacidad
      </Enlace>
      .
    </TextoLegal>
  );
}
const TextoLegal = styled.p`
  font-size: 0.75rem;
  text-align: center;
  color: #6b7280;
  margin-top: 20px;
  line-height: 1.5;
`;

const Enlace = styled.a`
  color: #2563eb;
  text-decoration: underline;
  &:hover {
    color: #030d27;
  }
`;
