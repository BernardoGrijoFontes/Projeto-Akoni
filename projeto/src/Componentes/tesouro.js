import React from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Tesouro() {
    return (
        <div class="m-4">
        <p>Você sai da caverna, e logo encontra uma ruína.</p>
        <p>Você decide explorar a ruína.</p>
        <p>Lá você encontra um baú.</p>
        <p>O que você faz?</p>
        <Link to='/mimico'><button class="button is-danger is-light is-outlined">Abrir</button></Link> 
        <Link to='/dragao'><button class="button is-danger is-light is-outlined">Ignorar</button></Link>
        </div>
    )
}

export default Tesouro