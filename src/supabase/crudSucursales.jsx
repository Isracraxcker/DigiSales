import { supabase } from "../index";
import toast from "react-hot-toast";
const tabla = "sucursales";
export async function MostrarSucursales(p) {
  const { data, error } = await supabase
    .from(tabla)
    .select()
    .eq("id_empresa", p.id_empresa);
  if (error) {
    toast.error(error.message || "Ocurrió un error al mostar las Sucursales");
    return;
  }
  return data;
}
