import Dado from "./dado";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Guerreiroataque3() {
    const [dado, setDado] = useState();
    return (
      <div class="m-4">
        <p>Você ataca mais uma vez.</p>
        <p>Role o dado:</p>
        <Dado setDado={setDado}></Dado>
      {
      dado && 
      <>
        {
          (dado === 6) ?
          <>
          <p>Seu ataque é super efetivo!</p>
          <p>O guerreiro foi derrotado!</p>
          <Link to='/mago'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
          </>
           :
          (dado<4) ?
          <>
          <p>O guerreiro contra-ataca.</p>
          <p>Você morreu.</p>
          <Link to='/guerreiroataque2'><button class="button is-danger is-light is-outlined">Tentar novamente</button></Link>
          </>
          :
          <>
          <p>Você derrotou o guerreiro!</p>
          <Link to='/mago'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
          </>
        }
      </>
     }
    </div>
    )
}

export default Guerreiroataque3