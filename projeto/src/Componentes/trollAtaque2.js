import Dado from "./dado";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Trollataque2(){
const [dado, setDado] = useState();
return (
  <div class="m-4">
    <p>Você ataca novamente.</p>
    <p>Role o dado:</p>
    <Dado setDado={setDado}></Dado>
  {
  dado && 
  <>
    {
      (dado === 6) ?
      <>
      <p>Seu ataque é super efetivo!</p>
      <p>O troll foi derrotado!</p>
      <Link to='/tesouro'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
      </>
       :
      (dado<4) ?
      <>
      <p>Seu ataque não faz efeito no troll e ele contra-ataca.</p>
      <p>Você morreu.</p>
      <Link to='/trollataque'><button class="button is-danger is-light is-outlined">Tentar novamente</button></Link>
      </>
      :
      <>
        <p>Seu ataque fez efeito, mas o troll ainda não foi derrotado.</p>
        <Link to='/trollataque3'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
      </>
    }
  </>
 }
</div>
)
}

export default Trollataque2