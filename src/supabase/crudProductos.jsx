import Swal from "sweetalert2";
import { supabase } from "../index";
import toast from "react-hot-toast";
const tabla = "productos";
export async function InsertarProductos(p) {
  const { error, data } = await supabase.rpc("insertarproductos", p);
  if (error) {
    toast.error(error.message || "Ocurrió un error al insertar el producto");
    return;
  }
  toast.success("Producto ingresado correctamente!");
  
  return data;
}

export async function MostrarProductos(p) {
  const { data } = await supabase.rpc("mostrarproductos", {
    _id_empresa: p.id_empresa,
  });
  return data;
}
export async function BuscarProductos(p) {
  const { data } = await supabase.rpc("buscarproductos", {
    _id_empresa: p.id_empresa,
    buscador: p.buscador,
  });

  return data;
}
export async function EliminarProductos(p) {
  const { error } = await supabase.from(tabla).delete().eq("id", p.id);
  if (error) {
    toast.error(error.message || "Ocurrió un error al eliminar el producto");
    return;
  }
  toast.success("Producto eliminado correctamente!");
}
export async function EditarProductos(p) {
  const { error } = await supabase.rpc("editarproductos", p);
  if (error) {
    toast.error(error.message || "Ocurrió un error al editar el producto");
    return;
  }
  toast.success("Producto editado correctamente!");
}

export async function MostrarUltimoProducto(p) {
  const { data } = await supabase
    .from(tabla)
    .select()
    .eq("id_empresa", p.id_empresa)
    .order("id", { ascending: false })
    .maybeSingle();

  return data;
}
