import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Guerreiro() {
    return (
        <div class="m-4">
        <p>Seguindo adiante, você se encontra em uma clareira</p>
        <p>No centro dela, você vê um guerreiro que vem em sua direção.</p>
        <p>O guerreiro se aproxima cada vez mais.</p>
        <p></p>
        <p>O que você faz?</p>
        <Link to='/guerreiroataque'><button class="button is-danger is-light is-outlined">Atacar</button></Link>
        <Link to='/guerreirofuga'><button class="button is-danger is-light is-outlined">Fugir</button></Link>
        </div>
    )
}

export default Guerreiro