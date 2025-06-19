import styled from "styled-components";
import {
  Btn1,
  Buscador,
  RegistrarProductos,
  TablaProductos,
  Title,
  useProductosStore,
} from "../../index";
import { v } from "../../styles/variables";
import { useState } from "react";

export function ProductosTemplate() {
  const [openRegistro, SetopenRegistro] = useState(false);
  const { dataProductos, setBuscador, generarCodigo } = useProductosStore();
  const [accion, setAccion] = useState("");
  const [dataSelect, setdataSelect] = useState([]);

  function nuevoRegistro() {
    SetopenRegistro(!openRegistro);
    setAccion("Nuevo");
    setdataSelect([]);

    generarCodigo();
  }

  return (
    <Container>
      {openRegistro && (
        <RegistrarProductos
          onClose={() => SetopenRegistro(!openRegistro)}
          dataSelect={dataSelect}
          accion={accion}
          state={openRegistro}
        />
      )}

      <section className="area1">
        <Title>Productos</Title>
        <Btn1
          funcion={nuevoRegistro}
          bgcolor={v.colorPrincipal}
          titulo="Nuevo"
          icono={<v.iconoagregar />}
        />
      </section>
      <section className="area2">
        <Buscador setBuscador={setBuscador} />
      </section>

      <section className="main">
        <TablaProductos
          setdataSelect={setdataSelect}
          setAccion={setAccion}
          SetopenRegistro={SetopenRegistro}
          data={dataProductos}
        />
      </section>
    </Container>
  );
}
const Container = styled.div`
  padding: 15px;
  display: grid;
  grid-template:
    "area1" 60px
    "area2" 60px
    "main" auto;
  .area1 {
    grid-area: area1;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
  }
  .area2 {
    grid-area: area2;
    /* background-color: rgba(7, 237, 45, 0.14); */
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .main {
    grid-area: main;
    /* background-color: rgba(237, 7, 221, 0.14); */
  }
`;
