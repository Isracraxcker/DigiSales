import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";
import { Buscador } from "../Buscador";
import { User } from "lucide-react";
export function PanelBuscador({
  setStateBuscador,
  setBuscador,
  displayField,
  data,
  selector,
}) {
  return (
    <Container>
      <div className="subcontent">
        <Icon
          className="icono"
          icon="ep:arrow-left-bold"
          onClick={setStateBuscador}
        />
        <Buscador setBuscador={setBuscador} />
        {data?.map((item, index) => {
          return (
            <Item
              onClick={() => {
                selector(item);
                setStateBuscador();
              }}
              key={index}
            >
              <User size={20} />
              {item[displayField]}
            </Item>
          );
        })}
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-color: #fff;
  height: 100%;
  position: absolute;
  width: 100%;
  .subcontent {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .icono {
      cursor: pointer;
    }
  }
`;
const Item = styled.div`
  border-radius: 5px;
  font-size: 18px;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px; // evita que se desplace si el texto es largo
    min-height: 24px;
  }
`;
