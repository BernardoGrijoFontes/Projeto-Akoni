import Dado from "./dado";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Dragaoataque5() {
    const [dado, setDado] = useState();
    return (
      <div class="m-4">
        <p>Você ataca.</p>
        <p>Role o dado:</p>
        <Dado setDado={setDado}></Dado>
      {
      dado && 
      <>
        {
          (dado === 6) ?
          <>
          <p>Você acerta um ataque certeiro no ponto fraco do dragão: o coração!</p>
          <p>O dragão foi derrotado!</p>
          <Link to='/final'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
          </>
           :
          (dado<4) ?
          <>
          <p>Seu ataque não fez efeito no dragão e ele te ataca com suas garras.</p>
          <p>Você morreu.</p>
          <Link to='/dragaoataque4'><button class="button is-danger is-light is-outlined">Tente novamente</button></Link>
          </>
          :
          <>
          <p>Seu ataque fez efeito, mas o dragão ainda não foi derrotado.</p>
          <Link to='/dragaoataque6'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
          </>
        }
      </>
     }
        </div>
    )
}

export default Dragaoataque5