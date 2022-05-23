import Dado from "./dado";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Mimico(){
    const [dado, setDado] = useState();
    return (
      <div class="m-4">
        <p>Ao abrir o baú, você se espanta com o que vê.</p>
        <p>Não havia tesouro nenhum, ao invés disso, apareceram grandes dentes e braços, que rapidamente te agarram.</p>
        <p>Você está diante de um mímico, criaturas que se disfarçam de baús para atrair suas vítimas.</p>
        <p>Role o dado:</p>
        <Dado setDado={setDado}></Dado>
    {
    dado && 
    <>
      {
        (dado === 6) ?
        <>
        <p>Você consegue se livrar das garras do mímico e o ataca.</p>
        <p>O mímico foi derrotado!</p>
        <Link to='/dragao'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
        </>
         :
        (dado<4) ?
        <>
        <p>Você não conseguiu se livrar das garras do mímico a tempo e foi devorado.</p>
        <p>Você morreu.</p>
        <Link to='/tesouro'><button class="button is-danger is-light is-outlined">Tentar novamente</button></Link>
        </>
        :
        <>
        <p>Você consegue se livrar das garras do mímico e o ataca.</p>
        <p>O mímico foi derrotado!</p>
        <Link to='/dragao'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
        </>
      }
    </>
   }
  </div>
    )
}

export default Mimico