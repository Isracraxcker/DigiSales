import { supabase } from "../index";
const tabla = "empresa";
export async function InsertarEmpresa(p) {
  const { data, error } = await supabase
    .from(tabla)
    .insert(p)
    .select()
    .maybeSingle();
  if (error) {
    
    return;
  }
  return data;
}

export async function MostrarEmpresaXidsuario(p) {
  const { data } = await supabase.rpc("mostrarempresaxiduser", p).maybeSingle();
  return data;
}
