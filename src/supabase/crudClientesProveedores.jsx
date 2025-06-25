import Swal from "sweetalert2";
import { supabase } from "../index";
import toast from "react-hot-toast";
const tabla = "clientes_proveedores";


export async function InsertarClientesProveedores(p) {
  const { error, data } = await supabase.rpc("insertarclientesproveedores", p);
  if (error) {
     toast.error(error.message || "Ocurrio un error al ingresar clientes proveedores");
    return;
  }
  toast.success("Ingresado correctamente!");
  return data;
}

export async function MostrarClientesProveedores(p) {
  const { data, error } = await supabase
    .from(tabla)
    .select()
    .eq("id_empresa", p.id_empresa)
    .eq("tipo", p.tipo);
  if (error) {
    return;
  }
  return data;
}
export async function BuscarClientesProveedores(p) {
  const { data, error } = await supabase
    .from(tabla)
    .select()
    .eq("id_empresa", p.id_empresa)
    .eq("tipo", p.tipo)
    .ilike("nombres", "%"+p.buscador+"%");
  if (error) {
    return;
  }
  return data;
}
export async function EliminarClientesProveedores(p) {
  const { error } = await supabase.from(tabla).delete().eq("id", p.id);
  if (error) {
    toast.error(error.message || "Ocurrio un error al eliminar clientes proveedores");
    return;
  }
  toast.success("Eliminado correctamente!");
}
export async function EditarClientesProveedores(p) {
  const { error } = await supabase.rpc("editarclientesproveedores", p);
  if (error) {
    toast.error(error.message || "Ocurrio un error al editar clientes proveedores");
    return;
  }
  toast.success("Editado correctamente!");
}

