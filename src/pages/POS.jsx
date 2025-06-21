import { useQuery } from "@tanstack/react-query";
import {
  POSTemplate,
  useAlmacenesStore,
  useEmpresaStore,
  useProductosStore,
  useSucursalesStore,
} from "../index";

export function POS() {
  const { dataempresa } = useEmpresaStore();
  const { mostrarAlmacenXsucursal } = useAlmacenesStore();

  const { sucursalesItemSelectAsignadas } = useSucursalesStore();
  const { buscarProductos, buscador } = useProductosStore();
  useQuery({
    queryKey: ["buscar productos", buscador],
    queryFn: () =>
      buscarProductos({ id_empresa: dataempresa?.id, buscador: buscador }),
    enabled: !!dataempresa,
    refetchOnWindowFocus: false,
  });

  const { isLoading, error } = useQuery({
    queryKey: [
      "mostrar almacen por sucursal",
      sucursalesItemSelectAsignadas.id_sucursal,
    ],
    queryFn: () =>
      mostrarAlmacenXsucursal({
        id_sucursal: sucursalesItemSelectAsignadas.id_sucursal,
      }),
  });

  if (isLoading) {
    return;
    //  <Spinner1/>
  }

  if (error) {
    return <span>Error...{error.message}</span>;
  }
  return <POSTemplate />;
}
