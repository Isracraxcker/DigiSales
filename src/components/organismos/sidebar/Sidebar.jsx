import styled from "styled-components";
import { LinksArray, SecondarylinksArray, ToggleTema } from "../../../index";
import { v } from "../../../styles/variables";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export function Sidebar({ state, setState }) {
  return (
    <>
      {/* Overlay para móvil */}
      {state && <Overlay onClick={() => setState(false)} />}
      
      <Main $isopen={state.toString()}>
        <span className="Sidebarbutton" onClick={() => setState(!state)}>
          {<v.iconoflechaderecha />}
        </span>
        <Container $isopen={state.toString()} className={state ? "active" : ""}>
          <div className="Logocontent">
            <div className="imgcontent">
              <img src={v.logo} alt="Logo" />
            </div>
            <h2>DigiSales</h2>
          </div>
          
          <div className="LinksSection">
            {LinksArray.map(({ icon, label, to }) => (
              <div
                className={state ? "LinkContainer active" : "LinkContainer"}
                key={label}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
                  onClick={() => {
                    // Cerrar sidebar en móvil al hacer click en un link
                    if (window.innerWidth <= 768) {
                      setState(false);
                    }
                  }}
                >
                  <section className={state ? "content open" : "content"}>
                    <Icon className="Linkicon" icon={icon} />
                    <span className={state ? "label_ver" : "label_oculto"}>
                      {label}
                    </span>
                  </section>
                </NavLink>
              </div>
            ))}
            
            <Divider />
            
            {SecondarylinksArray.map(({ icon, label, to, color }) => (
              <div
                className={state ? "LinkContainer active" : "LinkContainer"}
                key={label}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
                  onClick={() => {
                    if (window.innerWidth <= 768) {
                      setState(false);
                    }
                  }}
                >
                  <section className={state ? "content open" : "content"}>
                    <Icon color={color} className="Linkicon" icon={icon} />
                    <span className={state ? "label_ver" : "label_oculto"}>
                      {label}
                    </span>
                  </section>
                </NavLink>
              </div>
            ))}
            
            <div className={state ? "LinkContainer active" : "LinkContainer"}>
              <div className="Links">
                <section className={state ? "content open" : "content"}>
                  <Icon
                    color="#CE82FF"
                    className="Linkicon"
                    icon="fluent-color:share-ios-20"
                  />
                  <span className={state ? "label_ver" : "label_oculto"}>
                    SALIR
                  </span>
                </section>
              </div>
            </div>
          </div>

          <div className="ToggleSection">
            <ToggleTema />
          </div>
        </Container>
      </Main>
    </>
  );
}

// Overlay para móvil
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const Container = styled.div`
  background: ${({ theme }) => theme.bgtotal};
  color: ${(props) => props.theme.text};
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
  z-index: 2;
  height: 100vh;
  width: 88px;
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 2px solid ${({ theme }) => theme.color2};
  display: flex;
  flex-direction: column;

  /* Scrollbar personalizado */
  &::-webkit-scrollbar {
  display: none;
}
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colorScroll};
    border-radius: 10px;
  }

  /* Estados del sidebar */
  &.active {
    width: 260px;
  }

  /* Responsividad para móvil */
  @media (max-width: 768px) {
    transform: translateX(-100%);
    width: 280px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    
    &.active {
      transform: translateX(0);
      width: 280px;
    }
  }

  /* Tablets */
  @media (max-width: 1024px) and (min-width: 769px) {
    &.active {
      width: 240px;
    }
  }

  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    flex-shrink: 0;
    
    .imgcontent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: 0.3s ease;
      transform: ${({ $isopen }) =>
          $isopen === "true" ? `scale(0.7)` : `scale(1.5)`}
        rotate(${({ theme }) => theme.logorotate});
      
      img {
        width: 100%;
        animation: flotar 1.7s ease-in-out infinite alternate;
      }
    }
    
    h2 {
      color: #f88533;
      display: ${({ $isopen }) => ($isopen === "true" ? `block` : `none`)};
      margin-left: 15px;
      font-size: 1.2rem;
      
      @media (max-width: 768px) {
        display: block;
      }
    }
  }

  .LinksSection {
    flex: 1;
    overflow-y: auto;
    padding-bottom: 20px;
  }

  .ToggleSection {
    flex-shrink: 0;
    padding-bottom: 20px;
    border-top: 1px solid ${(props) => props.theme.bg4};
    padding-top: 20px;
  }

  .LinkContainer {
    margin: 9px 0;
    margin-right: 10px;
    margin-left: 8px;
    transition: all 0.3s ease-in-out;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
  }

  .Links {
    border-radius: 12px;
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
    color: ${(props) => props.theme.text};
    height: 60px;
    position: relative;
    
    .content {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      
      .Linkicon {
        display: flex;
        font-size: 33px;
        flex-shrink: 0;

        svg {
          font-size: 25px;
        }
      }

      .label_ver {
        transition: 0.3s ease-in-out;
        opacity: 1;
        display: initial;
        white-space: nowrap;
        font-size: 0.85rem;
      }
      
      .label_oculto {
        opacity: 0;
        display: none;
      }

      &.open {
        justify-content: start;
        gap: 20px;
        padding: 20px;
        
        @media (max-width: 768px) {
          gap: 15px;
          padding: 15px;
        }
      }
    }

    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }

    &.active {
      background: ${(props) => props.theme.bg6};
      border: 2px solid ${(props) => props.theme.bg5};
      color: ${(props) => props.theme.color1};
      font-weight: 600;
    }
  }

  /* Animación de flotado para el logo */
  @keyframes flotar {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
`;

const Main = styled.div`
  .Sidebarbutton {
    position: fixed;
    top: 70px;
    left: 68px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 3;
    transform: ${({ $isopen }) =>
      $isopen === "true" ? `translateX(173px) rotate(3.142rad)` : `initial`};
    color: ${(props) => props.theme.text};

    /* Responsividad para móvil */
    @media (max-width: 768px) {
      top: 20px;
      left: 20px;
      transform: ${({ $isopen }) =>
        $isopen === "true" ? `translateX(200px) rotate(3.142rad)` : `initial`};
    }

    /* Tablets */
    @media (max-width: 1024px) and (min-width: 769px) {
      transform: ${({ $isopen }) =>
        $isopen === "true" ? `translateX(153px) rotate(3.142rad)` : `initial`};
    }

    &:hover {
      transform: ${({ $isopen }) =>
        $isopen === "true" 
          ? `translateX(173px) rotate(3.142rad) scale(1.1)` 
          : `scale(1.1)`};
      
      @media (max-width: 768px) {
        transform: ${({ $isopen }) =>
          $isopen === "true" 
            ? `translateX(200px) rotate(3.142rad) scale(1.1)` 
            : `scale(1.1)`};
      }
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;