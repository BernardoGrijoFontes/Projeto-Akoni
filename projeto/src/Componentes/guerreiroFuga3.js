import Dado from "./dado";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Guerreirofuga3(){
    const [dado, setDado] = useState();
    return (
      <div class="m-4">
        <p>Você continua correndo.</p>
        <p>Role o dado:</p>
        <Dado setDado={setDado}></Dado>
      {
      dado && 
      <>
        {
          (dado === 6) ?
          <>
          <p>Você consegue despistar o guerreiro e fugir!</p>
          <Link to='/mago'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
          </>
           :
          (dado<4) ?
          <>
          <p>O guerreiro corre mais rápido.</p>
          <p>Você morreu.</p>
          <Link to='/guerreirofuga2'><button class="button is-danger is-light is-outlined">Tentar novamente</button></Link>
          </>
          :
          <>
          <p>Você despistou o guerreiro!</p>
          <Link to='/mago'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
          </>
        }
      </>
     }
    </div>
    )
}

export default Guerreirofuga3