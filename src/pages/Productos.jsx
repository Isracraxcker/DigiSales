/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
import { useQuery } from "@tanstack/react-query";
import {
  ProductosTemplate,
  Spinner1,
  useCategoriasStore,
  useEmpresaStore,
  useProductosStore,
  useSucursalesStore,
} from "../index";
import toast from "react-hot-toast";

export function Productos() {
  const {mostrarCategorias} = useCategoriasStore();
  const {mostrarSucursales} = useSucursalesStore();
  const { mostrarProductos, buscarProductos, buscador,setRefetch } =
    useProductosStore();
  const { dataempresa } = useEmpresaStore();
  const { isLoading, error,refetch } = useQuery({
    queryKey: ["mostrar productos", dataempresa?.id],
    queryFn: () =>
   
      mostrarProductos({ id_empresa: dataempresa?.id,refetchs:refetch })
    ,
    enabled: !!dataempresa,
    refetchOnWindowFocus: false,
  });
  //buscar productos
  const {  } = useQuery({
    queryKey: ["buscar productos", buscador],
    queryFn: () =>
      buscarProductos({ id_empresa: dataempresa?.id, buscador: buscador }),
    enabled: !!dataempresa,
    refetchOnWindowFocus: false,
  });

  //mostrar sucursales
   useQuery({
    queryKey: ["mostrar sucursales", dataempresa?.id],
    queryFn: () => mostrarSucursales({ id_empresa: dataempresa?.id }),
    enabled: !!dataempresa,
    refetchOnWindowFocus: false,
  });

  //mostrar categorias
  useQuery({
    queryKey: ["mostrar categorias", dataempresa?.id],
    queryFn: () => mostrarCategorias({ id_empresa: dataempresa?.id }),
    enabled: !!dataempresa,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Spinner1 />;
  }
  if (error) {
    return toast.error(error.message || "Ocurrio un error al mostrar los productos"); 
  }
  return <ProductosTemplate />;
}