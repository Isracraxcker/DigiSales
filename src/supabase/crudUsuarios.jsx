import { supabase } from "../index";
import toast from "react-hot-toast";
const tabla = "usuarios";

// Mostrar Usuarios
export async function MostrarUsuarios(p) {
  const { data } = await supabase
    .from(tabla)
    .select()
    .eq("id_auth", p.id_auth)
    .maybeSingle();
  return data;
}

/// Insertar
export async function InsertarAdmin(p) {
  const { error } = await supabase.from(tabla).insert(p);
  if (error) {
    toast.error(error.message || "Ocurrió un error al insertar el usuario");
    return;
  }
}


// Obtener Id
export async function ObtenerIdAuthSupabase() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session != null) {
    const { user } = session;
    const idauth = user.id;
    return idauth;
  }
}
