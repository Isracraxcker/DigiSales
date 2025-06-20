// eslint-disable-next-line no-unused-vars
import { v } from "../styles/variables";
import {
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";

export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: <v.iconoUser/>,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <v.iconoSettings/>,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <v.iconoCerrarSesion/>,
    tipo: "cerrarsesion",
  },
];



//data SIDEBAR
export const LinksArray = [
  {
    label: "Inicio",
    icon: "fluent-color:home-20",
    to: "/",
  },
  {
    label: "Dashboard",
    icon: "fluent-color:poll-20",
    to: "/reportes",
  },
  {
    label: "Vender",
    icon: "fluent-color:building-home-20",
    to: "/pos",
  },
  {
    label: "Inventario",
    icon: "fluent-color:clipboard-text-edit-20",
    to: "/kardex",
  },
  
 
];
export const SecondarylinksArray = [

   {
    label: "Perfil",
    icon:"fluent-color:person-16",
    to: "/perfil",
    color:"#CE82FF"
  },
 
  {
    label: "Configuración",
    icon:"fluent-color:settings-20",
    to: "/configuracion",
    color:"#CE82FF"
  },

  
  
  

];
//temas
export const TemasData = [
  {
    icono: "🌞",
    descripcion: "light",
   
  },
  {
    icono: "🌚",
    descripcion: "dark",
    
  },
];

//data configuracion
export const DataModulosConfiguracion =[
  {
    title:"Productos",
    subtitle:"registra tus productos",
    icono:"https://i.ibb.co/Wb1FNnL/productos.png",
    link:"/configurar/productos",
   
  },
  {
    title:"Personal",
    subtitle:"ten el control de tu personal",
    icono:"https://i.ibb.co/DPmcd4vt/personal.png",
    link:"/configurar/usuarios",
   
  },

  {
    title:"Tu empresa",
    subtitle:"configura tus opciones básicas",
    icono:"https://i.ibb.co/Q7nTzmQS/empresa.png",
    link:"/configurar/empresa",
    
  },
  {
    title:"Categoria de productos",
    subtitle:"asigna categorias a tus productos",
    icono:"https://i.ibb.co/0V2D9cXL/categoria.png",
    link:"/configuracion/categorias",
    
  },
  {
    title:"Marca de productos",
    subtitle:"gestiona tus marcas",
    icono:"https://i.ibb.co/S77LbNF3/marcas.png",
    link:"/configurar/marca",
   
  },

]
//tipo usuario
export const TipouserData = [
  {
    descripcion: "empleado",
    icono: "🪖",
  },
  {
    descripcion: "administrador",
    icono: "👑",
  },
];
//tipodoc
export const TipoDocData = [
  {
    descripcion: "Dni",
    icono: "🪖",
  },
  {
    descripcion: "Libreta electoral",
    icono: "👑",
  },
  {
    descripcion: "Otros",
    icono: "👑",
  },
];