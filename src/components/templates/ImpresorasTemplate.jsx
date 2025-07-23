import styled from "styled-components";
import { slideBackground } from "../../styles/keyframes";
import { Btn1 } from "../moleculas/Btn1";
import { Icon } from "@iconify/react/dist/iconify.js";
export const ImpresorasTemplate = () => {
  const descargarArchivo = (ruta) => {
    const link = document.createElement("a");
    link.href = ruta;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <SubContainer>
        <Title>IMPRESORAS</Title>
        <SubTitle>Imprimir directo</SubTitle>
        <Avatar $bg="#d70e79">
          <Btn1
            funcion={() =>
              descargarArchivo(
                "https://drive.google.com/file/d/1GgLCWahmtrrXjXoN-5TYlVEY-X9Ooxy1/view?usp=sharing"
              )
            }
            titulo={"Descargar"}
          />
          <span className="nombre">Ver Tutorial</span>
        </Avatar>
        <span className="descripcion">
          Servicio para imprimir directo a impresoras.
        </span>
        <section className="advertencia">
          <Icon className="icono" icon="svg-spinners:clock" />
          <span>Si ya instalo, actualice esta pagina.</span>
        </section>
      </SubContainer>
    </Container>
  );
};

const ContentSwich = styled.section`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
`;
const Container = styled.div`
  max-width: 400px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: auto;
  position: relative;
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .advertencia {
    background-color: rgba(237, 95, 6, 0.2);
    border-radius: 10px;
    margin-top: 10px;
    margin: auto;
    height: 70px;
    display: flex;
    color: #f75510;
    width: 100%;
    align-items: center;
    .icono {
      font-size: 50px;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
`;
const Title = styled.span`
  font-size: 44px;
  margin-bottom: 20px;
  font-weight: bold;
  position: absolute;
  top: 50px;
  right: 0;
  left: 0;
  text-align: center;
`;
const SubTitle = styled.span`
  font-size: 20px;
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  border-radius: 10px;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  .nombre {
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  }
  .anuncio {
    text-align: center;
    font-weight: bold;
    color: #fff;
  }
  background-color: ${(props) => props.$bg};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000' fill-opacity='0.19' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E");

  background-size: 60px 60px;
  animation: ${slideBackground} 10s linear infinite;
`;
