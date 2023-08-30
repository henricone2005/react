import { Outlet } from "react-router-dom";
import {Cabecalho} from "./components/cabecalho";
import {Rodape} from "./components/Rodape";

export default function App() {
 
 //Area declarativa
 let meuNome ="Henrique";
 
  return (
    <>
      {/* area imperativa */}
      <Cabecalho/>
     
     <Outlet/>
     <Rodape/>
      
      </>
  )
}
