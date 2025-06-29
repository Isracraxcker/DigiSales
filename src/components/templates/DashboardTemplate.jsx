import styled from "styled-components";
import { Device } from "../../styles/breakpoints";
import { DashboardHeader } from "../organismos/DashboardDesign/DashboardHeader";
import { CardTotales } from "../organismos/DashboardDesign/CardTotales";
import { ChartVentas } from "../organismos/DashboardDesign/ChartVentas";
import { ChartProductosTop } from "../organismos/DashboardDesign/ChartProductosTop";
export const DashboardTemplate = () => {
  return (
    <Container>
      <DashboardHeader />
      <MainContent>
        <Area1>
          <ContentTotales>
            <CardTotales
              title="Ventas"
              icon={"hugeicons:sale-tag-01"}
              value="1,000,000"
              percentage={10}
            />
          </ContentTotales>

          <ContentTotales>
            <CardTotales
              title="Cant. Productos vendidos"
              icon={"streamline-freehand:products-shopping-bags"}
              value="1,000,000"
              percentage={-10}
            />
          </ContentTotales>

          <ContentTotales>
            <CardTotales
              title="Ganancias"
              icon={"hugeicons:save-money-dollar"}
              value="1,000,000"
              percentage={0}
            />
          </ContentTotales>
        </Area1>
        <Area2>
         <ChartVentas />
        </Area2>
        <Area3>
          <ChartProductosTop /> 
        </Area3>
        <Area4>4</Area4>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-width: 1400px;
  margin: auto;
  gap: 20px;
  padding: 20px;
`;
const MainContent = styled.div`
  display: grid;
  grid-template-areas:
    "area1"
    "area2"
    "area3"
    "area4";
  grid-template-columns: 1fr;
  gap: 15px;
  @media ${Device.desktop} {
    grid-template-areas:
      "area1 area1 area3"
      "area2 area2 area3"
      "area4 area4 area4";
    grid-template-columns: 2fr 1fr 1fr;
    gap: 20px;
  }
`;
const Area1 = styled.section`
  grid-area: area1;
  /* background-color: rgba(242, 8, 242, 0.2); */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media ${Device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Area2 = styled.section`
  grid-area: area2;
  /* background-color: rgba(17, 228, 84, 0.2); */
  border: 2px solid ${({ theme }) => theme.bordercolorDash};
  box-shadow: ${({ theme }) => theme.boxshadow};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.body};
`;
const Area3 = styled.section`
  grid-area: area3;
  background-color: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.bordercolorDash};
  border-radius: 20px;
  /* background-color: rgba(21, 56, 231, 0.2); */
`;
const Area4 = styled.section`
  grid-area: area4;

  display:flex;
  gap:20px;
  flex-wrap:wrap;
  @media ${Device.desktop} {
    flex-wrap:nowrap;
  }
`;
const ContentTotales = styled.div`
  background-color: ${({ theme }) => theme.body};
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.bordercolorDash};
  box-shadow: ${({ theme }) => theme.boxshadow};
`;