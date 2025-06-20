/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import {
  Categorias,
  Configuraciones,
  Home,
  Login,
  ProtectedRoute,
  Spinner1,
  Productos,
  UserAuth,
  useEmpresaStore,
  useUsuariosStore,
  POS,
} from "../index";
import { useQuery } from "@tanstack/react-query";
export function MyRoutes() {
  const { user } = UserAuth();
  const { datausuarios, mostrarusuarios } = useUsuariosStore();
  const { mostrarempresa, dataempresa } = useEmpresaStore();

  //mostrar usuarios
  const { isLoading, error } = useQuery({
    queryKey: "mostrar usuarios",
    queryFn: mostrarusuarios,
    refetchOnWindowFocus: false,
  });

  //mostrar empresa
  const { data: dtempresa } = useQuery({
    queryKey: ["mostrar empresa", datausuarios?.id],
    queryFn: () => mostrarempresa({ _id_usuario: datausuarios?.id }),
    enabled: !!datausuarios,
    refetchOnWindowFocus: false,
  });

  // Cargando empresa y usuarios
  if (isLoading) {
    return <Spinner1 />;
  }
  if (error) {
    return <span>error...</span>;
  }

  return (
    <Routes>
      <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
        <Route path="/configuracion" element={<Configuraciones />} />
        <Route path="/configuracion/categorias" element={<Categorias />} />
        <Route path="/configuracion/productos" element={<Productos />} />
         <Route path="/pos" element={<POS />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
