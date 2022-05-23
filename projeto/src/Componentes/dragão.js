import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Dragao() {
    return (
        <div class="m-4">
        <p>Saindo da ruína, você se encontra novamente em uma clareira.</p>
        <p>Mas você nota algo estranho: a grama está quase completamente queimada.</p>
        <p>Logo que percebe isso, você escuta um rugido ameaçador vindo do céu.</p>
        <p>Um enorme dragão pousa em sua frente, e te encara com seus olhos furiosos, cuspindo uma labareda de fogo.</p>
        <p>O que você faz?</p>
        <Link to='/dragaoataque'><button class="button is-danger is-light is-outlined">Atacar</button></Link>
        <Link to='/dragaofuga'><button class="button is-danger is-light is-outlined">Fugir</button></Link>
        </div>
    )
}

export default Dragao