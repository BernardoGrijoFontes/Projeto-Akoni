import Dado from "./dado";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Magofuga2(){
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
          <p>Você consegue despistar o mago e fugir!</p>
          <Link to='/troll'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
          </>
           :
          (dado<4) ?
          <>
          <p>O mago te atinge com um feitiço a distância.</p>
          <p>Você morreu.</p>
          <Link to='/magofuga'><button class="button is-danger is-light is-outlined">Tentar novamente</button></Link>
          </>
          :
          <>
          <p>Você consegue correr, mas o mago ainda está atrás de você.</p>
          <Link to='/magofuga3'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
          </>
        }
      </>
     }
    </div>
    )
}

export default Magofuga2