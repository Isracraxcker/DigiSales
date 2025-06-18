import { create } from "zustand";
import { InsertarEmpresa, MostrarEmpresaXidsuario } from "../index";
export const useEmpresaStore = create((set) => ({

  dataempresa: [],

  //  mostrar Empresa 
  mostrarempresa: async (p) => {
    const response = await MostrarEmpresaXidsuario(p);
    set({ dataempresa: response });
    return response;
  },

  // insertar Empresa
  insertarempresa: async (p) => {
    const response = await InsertarEmpresa(p);
    console.log("respuesta empresa", response);
  },
}));