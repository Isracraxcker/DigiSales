import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { useEmpresaStore } from "../../../store/EmpresaStore";
import { FormatearNumeroDinero } from "../../../utils/Conversiones";
import { useVentasStore } from "../../../store/VentasStore";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useThemeStore } from "../../../store/ThemeStore";
export const ChartProductosTop = () => {
  const { dataempresa } = useEmpresaStore();
  const { porcentajeCambio } = useVentasStore();

  const { themeStyle } = useThemeStore();
  const isPositive = porcentajeCambio > 0;
  const isNeutral = porcentajeCambio === 0;

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    }
  ];
  return (
    <Container>
      <Header>
        <Title>Top 5</Title>
        <Subtitle>Productos</Subtitle>
      </Header>
      {data.map((item, index) => {
        return (
          <Row key={index}>
            <NameContent>
              <Name>{item.name} </Name>
            </NameContent>
            <Stats>
              <Value>45 </Value>
              <Percentage>45 %</Percentage>
            </Stats>
          </Row>
        );
      })}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={themeStyle.text} stopOpacity={0.2} />
              <stop offset="95%" stopColor={themeStyle.text} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeOpacity={0.2} vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            strokeWidth={6}
            type="monotone"
            dataKey="uv"
            fill={themeStyle.text}
            activeDot={{ r: 6 }}
            fillOpacity={1}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};
const CustomTooltip = ({ active, payload, label }) => {
  const { dataempresa } = useEmpresaStore();
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <Date>{label} </Date>
        <Value>
          {FormatearNumeroDinero(
            payload[0].value,
            dataempresa?.currency,
            dataempresa?.iso
          )}
        </Value>
      </TooltipContainer>
    );
  }
};
const Stats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Value = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colortitlecard};
`;
const Percentage = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #828282;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 8px;
`;
const NameContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 2;
`;
const Name = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #6b7280;
  margin: 5px 0 0;
`;
const Container = styled.div`
  padding: 20px;
`;
const TooltipContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  padding: 10px;
  border-radius: 8px;
  font-size: 12px;
  box-shadow: ${({ theme }) => theme.boxshadow};
`;
const Date = styled.div`
  font-size: 14px;
`;

const Header = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;
const MainInfo = styled.div`
  margin: 20px 0;
`;
const Revenue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
const Change = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;
