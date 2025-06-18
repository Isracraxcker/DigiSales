
import { supabase } from "../index";
import toast from "react-hot-toast";
const tabla = "modulos";
export async function MostrarModulos() {

  const { data,error } = await supabase
    .from(tabla)
    .select()
    if (error) {
    toast.error(error.message || "Ocurrio un error al mostrar los modulos");
    return;
  }
  return data;
}