import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Personagem() {
    const nome = localStorage.getItem("nome")
    useEffect(()=>console.log(localStorage.getItem("nome")),[])
    return (
        <div class="m-4">
            {nome}
        </div>
    )
};
export default Personagem;