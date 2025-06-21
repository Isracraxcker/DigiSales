import { supabase } from "../index";
import toast from "react-hot-toast";
const tabla = "detalle_venta";
export async function InsertarDetalleVentas(p) {
  const { error } = await supabase.rpc("insertardetalleventa", p);
  if (error) {
    toast.error(error.message || "Ocurrio un error al ingresar detalle venta");
    return;
  }
  toast.success("Venta ingresada correctamente!");
}

export async function MostrarDetalleVenta(p) {
  console.log("idventa", p);
  const { data, error } = await supabase.rpc("mostrardetalleventa", {
    _id_venta: p.id_venta,
  });
  if (error) {
    toast.error(error.message || "Ocurrio un error al mostrar detalle venta");
    return;
  }
  return data;
}

export async function EliminarDetalleVentas(p) {
  const { error } = await supabase.from(tabla).delete().eq("id", p.id);
  if (error) {
    toast.error(error.message || "Ocurrio un error al eliminar detalle venta");
    return;
  }
  toast.success("Venta eliminada correctamente!");
}
