import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Mago() {
    return (
        <div class="m-4">
        <p>Você segue adentrando a floresta, até que vê uma luz entre as árvores.</p>
        <p>Ao se aproximar, você percebe que se trata de um mago, que vem em sua direção.</p>
        <p>O que você faz?</p>
        <Link to='/magoataque'><button class="button is-danger is-light is-outlined">Atacar</button></Link>
        <Link to='/magofuga'><button class="button is-danger is-light is-outlined">Fugir</button></Link>
        </div>
    )
}

export default Mago