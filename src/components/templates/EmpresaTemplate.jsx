import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Btn1 } from "../moleculas/Btn1";

import { useAuthStore } from "../../store/AuthStore";

export const EmpresaTemplate = () => {
  const { cerrarSesion } = useAuthStore();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Función que se ejecuta al hacer clic en cerrar sesión
  const handleLogoutClick = () => {
    setShowConfirmModal(true);
  };

  // Función que ejecuta el cierre de sesión real
  const confirmarCierre = () => {
    setShowConfirmModal(false);
    cerrarSesion();
  };

  // Función para cancelar
  const cancelarCierre = () => {
    setShowConfirmModal(false);
  };

  return (
    <Main>
      <PageContainer>
        <Content>
          <Outlet />
        </Content>
        <Sidebar>
          <SidebarSection>
            <SidebarTitle>Empresa</SidebarTitle>
            <SidebarItem to="empresabasicos">Básico</SidebarItem>
            <SidebarItem to="monedaconfig">Moneda</SidebarItem>
          </SidebarSection>

          <Btn1
            funcion={handleLogoutClick}
            bgcolor="transparent"
            color={({ theme }) => theme.text}
            titulo="cerrar sesión"
          />
        </Sidebar>
      </PageContainer>

      {/* Modal de confirmación */}
      {showConfirmModal && (
        <ModalOverlay onClick={cancelarCierre}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Confirmar cierre de sesión</ModalTitle>
            <ModalMessage>¿Estás seguro de que quieres cerrar sesión?</ModalMessage>
            <ModalButtons>
              <CancelButton onClick={cancelarCierre}>Cancelar</CancelButton>
              <ConfirmButton onClick={confirmarCierre}>Cerrar sesión</ConfirmButton>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
    </Main>
  );
};

const Main = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  justify-content: center;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    width: 250px;
    order: 2;
  }
`;

const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  margin: 5px 0;
  transition: all 0.3s ease-in-out;
  padding: 0 5%;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  height: 60px;

  &:hover {
    color: ${(props) => props.theme.colorSubtitle};
  }
  &.active {
    background: ${(props) => props.theme.bg6};
    border: 2px solid ${(props) => props.theme.bg5};
    color: ${(props) => props.theme.color1};
    font-weight: 600;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
`;

const SidebarTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.2em;
`;

const SidebarSection = styled.div`
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color2};
  padding: 12px;
`;

// Estilos del modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.bg1 || '#fff'};
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 1.2em;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;

const ModalMessage = styled.p`
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.colorSubtitle || '#666'};
  line-height: 1.4;
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  border: 2px solid ${({ theme }) => theme.color2 || '#ddd'};
  background: transparent;
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.bg2 || '#f5f5f5'};
  }
`;

const ConfirmButton = styled.button`
  padding: 8px 16px;
  border: none;
  background: #e74c3c;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #c0392b;
  }
`;