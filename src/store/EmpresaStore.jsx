import { create } from "zustand";
import {
  EditarEmpresa,
  EditarMonedaEmpresa,
  InsertarEmpresa,
  MostrarEmpresaXidsuario,
} from "../index";
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

  // editar Empresa
  editarEmpresa: async (p, fileold, filenew) => {
    await EditarEmpresa(p, fileold, filenew);
  },

  // editar Empresa -> Moneda
  editarMonedaEmpresa: async (p) => {
    await EditarMonedaEmpresa(p);
  },
}));
