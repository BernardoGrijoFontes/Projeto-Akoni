import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Final() {
    const nome = localStorage.getItem("nome")
    useEffect(()=>console.log(localStorage.getItem("nome")),[])
    return (
        <div class="m-4">
        <p>Parabéns {nome}, você superou todos os desafios.</p>
        <p>Após derrotar o dragão, você encontra um portal, e sente que sua jornada chegou ao fim.</p>
        <p>Ao passar pelo portal, você acorda em sua cama, e logo percebe o que aconteceu.</p>
        <p>Foi tudo um sonho.</p>
        <p>Você se levanta decepcionado e volta para sua vida normal.</p>
        </div>
    )
}

export default Final