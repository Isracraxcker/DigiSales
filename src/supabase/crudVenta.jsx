import { supabase } from "../index";
import toast from "react-hot-toast";
const tabla = "ventas";
export async function InsertarVentas(p) {
  const { error, data } = await supabase
    .from(tabla)
    .insert(p)
    .select()
    .maybeSingle();
  if (error) {
    toast.error(error.message || "Ocurrió un error al insertar ventas");
    return;
  }
  toast.success("Venta ingresada correctamente!");
  return data;
}

export async function EliminarVentasIncompletas(p) {
  const { error } = await supabase
    .from(tabla)
    .delete()
    .eq("estado", "nueva")
    .eq("id_usuario", p.id_usuario);
  if (error) {
    return;
  }
}

export async function MostrarVentasXsucursal(p) {
  const { data } = await supabase
    .from(tabla)
    .select()
    .eq("id_sucursal", p.id_sucursal)
    .eq("estado", "nueva")
    .maybeSingle();

  return data;
}
