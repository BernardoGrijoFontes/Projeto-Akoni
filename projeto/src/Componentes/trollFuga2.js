import Dado from "./dado";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Trollfuga2(){
    const [dado, setDado] = useState();
    return (
      <div class="m-4">
        <p>Você corre mais.</p>
        <p>Role o dado:</p>
        <Dado setDado={setDado}></Dado>
      {
      dado && 
      <>
        {
          (dado === 6) ?
          <>
          <p>Você consegue despistar o troll pela caverna e escontrar uma saída!</p>
          <Link to='/tesouro'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
          </>
           :
          (dado<4) ?
          <>
          <p>O troll bloqueia sua passagem e te impede de fugir.</p>
          <p>Você morreu.</p>
          <Link to='/trollfuga'><button class="button is-danger is-light is-outlined">Tentar novamente</button></Link>
          </>
          :
          <>
          <p>Você corre, mas o troll está atrás de você.</p>
          <Link to='/trollfuga3'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
          </>
        }
      </>
     }
    </div>
    )
}

export default Trollfuga2