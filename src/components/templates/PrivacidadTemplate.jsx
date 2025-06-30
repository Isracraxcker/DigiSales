import styled from "styled-components";

export function PrivacidadTemplate() {
  return (
    <Container>
      <Title>Condiciones de privacidad</Title>
      <Text>
        En DigiSales nos comprometemos a proteger tu privacidad y tus datos
        personales.
      </Text>
      <Text>
        Esta política describe cómo recogemos, usamos y protegemos tu
        información.
      </Text>

      <Text>
        <Subtitle>1. Información Recopilada</Subtitle>
        Recopilamos únicamente los datos necesarios para ofrecerte el servicio,
        como tu nombre y correo electrónico en el caso de autenticación con
        Google.
      </Text>

      <Text>
        <Subtitle>2. Uso de la Información</Subtitle>
        Tu información es utilizada exclusivamente para la gestión de tu cuenta
        y mejorar tu experiencia dentro de DigiSales.
      </Text>
      <Text>
        <Subtitle>3. Protección de Datos</Subtitle>
        Implementamos medidas de seguridad técnicas y organizativas para
        proteger tus datos contra accesos no autorizados.
      </Text>

      <Text>
        <Subtitle>3. Protección de Datos</Subtitle>
        Implementamos medidas de seguridad técnicas y organizativas para
        proteger tus datos contra accesos no autorizados.
      </Text>

      <Text>
        <Subtitle>4. Compartición de Datos</Subtitle>
        No vendemos, alquilamos ni compartimos tu información con terceros sin
        tu consentimiento, salvo que la ley lo exija.
      </Text>

      <Text>
        <Subtitle>5. Derechos del Usuario</Subtitle>
        Tienes derecho a acceder, rectificar o eliminar tus datos personales.
        Para ejercer estos derechos, contáctanos a
        andyisraeljaramillo@gmail.com.
      </Text>

      <Text>
        <Subtitle>6. Cambios en la Política</Subtitle>
        Podemos actualizar esta política en cualquier momento. Los cambios serán
        publicados en esta página.
      </Text>

      <Text>Gracias por confiar en DigiSales.</Text>
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
