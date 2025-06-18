import { useQuery } from "@tanstack/react-query";
import { ConfiguracionesTemplate, Spinner1, useModulosStore } from "../index";
import toast from "react-hot-toast";
export function Configuraciones() {
  const { mostrarModulos } = useModulosStore();


  const { isLoading, error } = useQuery({
    queryKey: "mostrar modulos",
    queryFn: mostrarModulos,
  });
  if (isLoading) {
    return <Spinner1 />;
  }
  if (error) {
    toast.error(error.message || "Ocurrio un error al mostrar los modulos");
  }
  return <ConfiguracionesTemplate />;
}
