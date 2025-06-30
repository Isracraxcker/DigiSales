import styled from "styled-components";

export const SucursalesCajasTemplate = () => {
  return (
    <Container>
      <section className="area1">
        <Header>
          <Title>Sucursales y Cajas</Title>
          <Subtitle>Gestiona tus sucursales y cajas</Subtitle>
        </Header>
      </section>

      <section className="area2">Area2</section>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  position: relative;
  grid-template:
    "area1" 300px
    "area2" auto;
  .area1 {
    grid-area: area1;
    display: flex;
    flex-direction: column;
  }
  .area2 {
    grid-area: area2;
    padding-bottom: 20px;
  }
`;
const Header = styled.div`
  margin-bottom: 20px;
  text-align: center;
  justify-content: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;
const Subtitle = styled.p`
  font-size: 18px;
  color: #6b7280;
  margin: 5px 0 0;
`;
