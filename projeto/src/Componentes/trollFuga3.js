import Dado from "./dado";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Trollfuga3(){
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
          <p>Você consegue despistar o troll pela caverna e escontrar uma saída!</p>
          <Link to='/tesouro'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
          </>
           :
          (dado<4) ?
          <>
          <p>O troll bloqueia sua passagem e te impede de fugir.</p>
          <p>Você morreu.</p>
          <Link to='/trollfuga2'><button class="button is-danger is-light is-outlined">Tentar novamente</button></Link>
          </>
          :
          <>
          <p>Você despistou o troll e achou uma saída da caverna!</p>
          <Link to='/tesouro'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
          </>
        }
      </>
     }
    </div>
    )
}

export default Trollfuga3