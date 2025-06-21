import { supabase } from "../index";
import toast from "react-hot-toast";
const tabla = "almacenes";

export async function InsertarStockAlmacen(p) {
  const { error } = await supabase.from(tabla).insert(p);
  if (error) {
    toast.error(error.message || "Ocurrio un error al ingresar stock");
    return;
  }
  toast.success("Stock ingresado correctamente!");
}
export async function MostrarStockAlmacenXSucursal(p) {
  const { data } = await supabase
    .from(tabla)
    .select()
    .eq("id_sucursal", p.id_sucursal)
    .eq("id_producto", p.id_producto)
    .maybeSingle();
  return data;
}

export async function MostrarAlmacenXSucursal(p) {
  const { data } = await supabase
    .from(tabla)
    .select()
    .eq("id_sucursal", p.id_sucursal)

    .maybeSingle();
  return data;
}
export async function EliminarAlmacen(p) {
  const { error } = await supabase.from(tabla).delete().eq("id", p.id);
  if (error) {
    toast.error(error.message || "Ocurrio un error al eliminar stock");
    return;
  }
  toast.success("Almacen eliminado correctamente!");
}
