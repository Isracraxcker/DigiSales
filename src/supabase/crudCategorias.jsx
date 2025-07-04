
import toast from "react-hot-toast";
import { supabase } from "../index";
const tabla = "categorias";



export async function InsertarCategorias(p, file) {
  const { error, data } = await supabase.rpc("insertarcategorias", p);
  if (error) {
    toast.error(error.message || "Ocurrió un error al insertar la categoría");
    return;
  } 
  
  const img = file.size;
   if (img != undefined) {
    const nuevo_id = data;
    const urlImagen = await subirImagen(nuevo_id, file);
    const piconoeditar = {
      icono: urlImagen.publicUrl,
      id: nuevo_id,
    };
     await EditarIconoCategorias(piconoeditar);
  }
  toast.success("¡Categoría insertada correctamente!");
}


async function subirImagen(idcategoria, file) {
  const ruta = "categorias/" + idcategoria;
  const { data, error } = await supabase.storage
    .from("imagenes")
    .upload(ruta, file, {
      cacheControl: "0",
      upsert: true,
    });

  if (error) {
    toast.error(error.message || "Ocurrió un error al subir la imagen");
    return;
  }
  if (data) {
    const { data: urlimagen } = await supabase.storage
      .from("imagenes")
      .getPublicUrl(ruta);
    return urlimagen;
  }
}

async function EditarIconoCategorias(p) {
  const { error } = await supabase.from("categorias").update(p).eq("id", p.id);
  if (error) {
    toast.error(error.message || "Ocurrió un error al editar la categoría");
    return;
  }
}

export async function MostrarCategorias(p) {
  const { data } = await supabase
    .from(tabla)
    .select()
    .eq("id_empresa", p.id_empresa)
    .order("id", { ascending: false });
  return data;
}

export async function BuscarCategorias(p) {
  const { data } = await supabase
    .from(tabla)
    .select()
    .eq("id_empresa", p.id_empresa)
    .ilike("nombre", "%" + p.descripcion + "%");

  return data;
}

export async function EliminarCategorias(p) {
  const { error } = await supabase.from(tabla).delete().eq("id", p.id);
  if (error) {
     toast.error(error.message || "Ocurrió un error al eliminar la categoría");
    return;
  }
  if (p.icono != "-") {
    const ruta = "categorias/" + p.id;
    await supabase.storage.from("imagenes").remove([ruta]);
  }

  toast.success("¡Categoría eliminada correctamente!");
}

export async function EditarCategorias(p, fileold, filenew) {
  const { error } = await supabase.rpc("editarcategorias", p);
  if (error) {
    toast.error(error.message || "Ocurrió un error al editar la categoría");
    return;
  }
  if (filenew != "-" && filenew.size != undefined) {
    if (fileold != "-") {
      await EditarIconoStorage(p._id, filenew);
    } else {
      const dataImagen = await subirImagen(p._id, filenew);
      const piconoeditar = {
        icono: dataImagen.publicUrl,
        id: p._id,
      };
      await EditarIconoCategorias(piconoeditar);
    }
  }
  toast.success("¡Categoría editada correctamente!");
}

export async function EditarIconoStorage(id, file) {
  const ruta = "categorias/" + id;
  await supabase.storage.from("imagenes").update(ruta, file, {
    cacheControl: "0",
    upsert: true,
  });
}