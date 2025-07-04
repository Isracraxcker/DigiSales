/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import styled from "styled-components";
import { Device } from "../../styles/breakpoints";
import { Clock10 } from "lucide-react";
export function Reloj() {
  const [hora, setHora] = useState("");
  const [fecha, setFecha] = useState("");
  useEffect(() => {
    const mostrarReloj = () => {
      const fechaActual = new Date();
      const horaActual = fechaActual.getHours();
      const minutosActual = fechaActual.getMinutes();
      const segundosActual = fechaActual.getSeconds();
      const mesActual = fechaActual.getMonth();
      const diaActual = fechaActual.getDate();
      const añoActual = fechaActual.getFullYear();

      const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ];
      const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];

      const mes = meses[mesActual];
      const hr = horaActual > 12 ? horaActual - 12 : horaActual;
      const am = horaActual < 12 ? "AM" : "PM";

      const formattedHora = horaActual < 10 ? "0" + horaActual : horaActual;
      const formattedMinutos =
        minutosActual < 10 ? "0" + minutosActual : minutosActual;
      const formattedSegundos =
        segundosActual < 10 ? "0" + segundosActual : segundosActual;

      setHora(`${hr}:${formattedMinutos}:${formattedSegundos}:${am}`);
      setFecha(
        `${dias[fechaActual.getDay()]} ${diaActual} ${mes} del ${añoActual}`
      );
    };

    const intervalId = setInterval(mostrarReloj, 1000);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El segundo argumento [] indica que este efecto se ejecuta solo al montar el componente

  return (
    <Container>
      <div className="cont-reloj">
        <div className="reloj" id="reloj">
          {<Clock10 size={20} />} {hora} 
        </div>
        <div className="datos">
          <span id="fec_Datos">{fecha}</span>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .cont-reloj {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-weight: bold;
    gap: 10px;
    margin-top: 8px;
    @media ${Device.laptop} {
      margin-top: 0;
    }
  }
  .reloj {
    font-size: 1em;
    align-items: center;
    display: flex;
    gap: 5px;
  }
  .datos {
    font-size: 1em;
  }
`;
