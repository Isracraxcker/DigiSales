import { create } from "zustand";
import {
  MostrarSucursales,
  MostrarSucursalesAsignadasXuser,
  MostrarCajasXSucursal,
  InsertarSucursal,
  EditarSucursal,
  EliminarSucursal,
} from "../index";

export const useSucursalesStore = create((set) => ({
  stateSucursal: false,
  setStateSucursal: (p) => set({ stateSucursal: p }),
  accion: "",
  setAccion: (p) => set({ accion: p }),

  sucursalesItemSelect: [],
  selectSucursal: (p) => {
    set({ sucursalesItemSelect: p });
  },
  dataSucursales: null,
  dataSucursalesAsignadas: [],
  sucursalesItemSelectAsignadas: [],
  mostrarSucursales: async (p) => {
    const response = await MostrarSucursales(p);
    set({ dataSucursales: response });
    set({ sucursalesItemSelect: response[0] });
    return response;
  },
  mostrarSucursalesAsignadas: async (p) => {
    const response = await MostrarSucursalesAsignadasXuser(p);
    set({ dataSucursalesAsignadas: response });
    set({ sucursalesItemSelectAsignadas: response[0] });
    console.log(response[0]);
    return response;
  },
  mostrarCajasXSucursal: async (p) => {
    const response = await MostrarCajasXSucursal(p);
    return response;
  },
  insertarSucursal: async (p) => {
    await InsertarSucursal(p);
  },
  editarSucursal: async (p) => {
    await EditarSucursal(p);
  },
  eliminarSucursal: async (p) => {
    await EliminarSucursal(p);
  },
}));
