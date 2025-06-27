
/* eslint-disable react-hooks/rules-of-hooks */
import styled from "styled-components";
import { Device } from "../../index";
import { useEffect, useRef, useState } from "react";
import { ShoppingBasket,  X } from 'lucide-react';
export function ListaDesplegable({
  data,
  setState,
  funcion,
  scroll,
  top,
  state,
  refetch,
  funcioncrud,
}) {
  if (!state) return;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dropdownRef = useRef(null);
  function seleccionar(p) {
    if (refetch) {
      refetch();
    }

    funcion(p);
    setState();
    if (funcioncrud) {
      funcioncrud();
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      seleccionar(data[selectedIndex]);
    } else if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % data.length);
    } else if (e.key === "ArrowUp") {
      setSelectedIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      );
    }
  };
  useEffect(() => {
    dropdownRef.current?.focus();
  }, []);
  return (
    <Container scroll={scroll} $top={top} ref={dropdownRef} tabIndex={0} onKeyDown={handleKeyDown} >
      <section className="contentClose" onClick={setState}>
           <X size={20} />
      </section>
      <section className="contentItems">
        {data?.map((item, index) => {
          return (
            <ItemContainer style={{ background: index === selectedIndex ? "rgba(0,0,0,0.1)" : ""}}  key={index} onClick={() => seleccionar(item)}>
               <ShoppingBasket size={20}  />
              <span>{item?.nombre}</span>
            </ItemContainer>
          );
        })}
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: absolute;
  margin-bottom: 15px;
  top: ${(props) => props.$top};
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  z-index: 3;
  width: 95%;
    &:focus{
      outline: none;
    }

  @media ${() => Device.tablet} {
  }
  .contentClose {
    font-weight: 700;
    cursor: pointer;
    font-size: 20px;
  }
  .contentItems {
    overflow-y: ${(props) => props.scroll};
  }
`;
const ItemContainer = styled.div`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.bgtotal};
  }
`;
