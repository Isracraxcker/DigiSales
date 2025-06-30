import styled from "styled-components";

export function TerminosTemplate() {
  return (
    <Container>
      <Title>Términos y condiciones</Title>
      <Text>
        Bienvenido a DigiSales. Al usar nuestra plataforma aceptas los términos
        y condiciones aquí descritos.
      </Text>
      <Text>
        Este documento establece las reglas y regulaciones para el uso del
        servicio...
      </Text>
      <Text>
        <Subtitle>1. Uso del Servicio</Subtitle>
        DigiSales te proporciona acceso a una plataforma de gestión y ventas. El
        uso de esta aplicación es bajo tu responsabilidad.
      </Text>

      <Text>
        <Subtitle>2. Propiedad Intelectual</Subtitle>
        Todo el contenido, diseño, código y marcas son propiedad de DigiSales o
        sus licenciantes y están protegidos por leyes de propiedad intelectual.
      </Text>

      <Text>
        <Subtitle>3. Uso Prohibido </Subtitle>
        No está permitido usar la plataforma para actividades ilegales,
        fraudulentas o que violen derechos de terceros.
      </Text>

      <Text>
        <Subtitle> 4. Modificaciones</Subtitle>
        DigiSales se reserva el derecho de modificar estos términos en cualquier
        momento sin previo aviso. Las modificaciones serán visibles en esta
        misma página.
      </Text>

      <Text>
        <Subtitle>5. Limitación de Responsabilidad</Subtitle>
        DigiSales no se responsabiliza por daños directos o indirectos derivados
        del uso o imposibilidad de uso de la plataforma.
      </Text>

      <Text>
        Gracias por utilizar DigiSales.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Text = styled.p`
  line-height: 1.6;
  margin-bottom: 12px;
`;
