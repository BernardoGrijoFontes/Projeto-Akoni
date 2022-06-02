import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Inicio() {
    return (
        <div class="m-4">
        <p>Você acorda em uma floresta escura, sem saber quem é nem onde está.</p>
        <p>Você não vê nada além de árvores e um caminho de pedra, que leva para frente.</p>
        <p>Você decide seguir pelo caminho.</p>
        <Link to='/guerreiro'><button class="button is-danger is-light is-outlined">Continuar</button></Link>
        </div>
    )
}

export default Inicio;