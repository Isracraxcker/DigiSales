"use client";

import styled, { keyframes, css } from "styled-components";

export function PageNot() {
  return (
    <Container>
      {/* Animated background elements */}
      <BackgroundEffects>
        <BgCircle variant="circle1" />
        <BgCircle variant="circle2" />
        <BgCircle variant="circle3" />
      </BackgroundEffects>

      {/* Floating particles */}
      <ParticlesContainer>
        {[...Array(20)].map((_, i) => (
          <Particle
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            delay={Math.random() * 2}
            duration={2 + Math.random() * 2}
          />
        ))}
      </ParticlesContainer>

      <ContentWrapper>
        <ContentGrid>
          {/* Content Section */}
          <ContentSection>
            {/* Badge */}
            <StatusBadge>
              <WrenchIcon>🔧</WrenchIcon>
            </StatusBadge>

            {/* Main Title */}
            <TitleSection>
              <MainTitle>404</MainTitle>
              <TitleDecoration></TitleDecoration>
            </TitleSection>

            {/* Description */}
            <Description>
              Esta página no existe <br />
              <HighlightText>Por favor, vuelve.</HighlightText>
            </Description>
          </ContentSection>
        </ContentGrid>
      </ContentWrapper>
    </Container>
  );
}
// Animaciones
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const shadow = keyframes`
  0%, 100% { transform: translateX(-50%) scale(1); }
  50% { transform: translateX(-50%) scale(0.8); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0, 0, 0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0, -4px, 0); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100%;
  font-family: "Space Grotesk", sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap");

  @media (max-width: 768px) {
    height: auto;
    min-height: 100dvh;
    overflow-y: auto;
  }
`;

const BackgroundEffects = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

const BgCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: ${pulse} 3s ease-in-out infinite;

  ${(props) =>
    props.variant === "circle1" &&
    css`
      top: 80px;
      left: 80px;
      width: 288px;
      height: 288px;
      background: rgba(9, 5, 51, 0.329);
    `}

  ${(props) =>
    props.variant === "circle2" &&
    css`
      bottom: 80px;
      right: 80px;
      width: 384px;
      height: 384px;
      background: rgba(8, 24, 49, 0.26);
      animation-delay: 1s;
    `}
  
  ${(props) =>
    props.variant === "circle3" &&
    css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 256px;
      height: 256px;
      background: rgba(99, 102, 241, 0.2);
      animation-delay: 0.5s;
    `}
`;

const ParticlesContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Particle = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(7, 2, 36, 0.74);
  border-radius: 50%;
  animation: ${bounce} ${(props) => props.duration}s infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContentSection = styled.div`
  text-align: center;
  color: white;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #b7b7b7;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(2, 1, 8, 0.2);
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 14px;
  background: ${({ theme }) => theme.text};
  margin-bottom: 32px;
`;

const WrenchIcon = styled.div`
  animation: ${spin} 2s linear infinite;
  font-size: 26px;
`;

const TitleSection = styled.div`
  margin-bottom: 32px;
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  background: ${({ theme }) => theme.text};
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0 0 16px 0;
  animation: ${gradientShift} 3s ease infinite;

  @media (min-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const TitleDecoration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  background: ${({ theme }) => theme.text};
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    margin-left: 0;
    margin-right: 0;
  }
`;

const HighlightText = styled.span`
  background: ${({ theme }) => theme.text};
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  animation: ${gradientShift} 2s ease infinite;
`;
