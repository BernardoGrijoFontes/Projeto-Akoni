import React from "react";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

function Teste() {
    const [nome, setNome] = useState("");
    let navigate = useNavigate();
    function logar() {
        localStorage.setItem("nome", nome)
        navigate('/inicio')
    }
    return (
        <div class="m-4">
        <p>Bem vindo jogador!</p>
        <p>Insira seu nome:</p>
        <input type="text" value={nome} onChange={(event)=>setNome(event.target.value)}></input>
        <br></br>
        <br></br>
        <button onClick={logar} class="button is-danger is-light is-outlined">Continuar</button>
        </div>
    );

};

export default Teste;