import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Troll() {
    return (
        <div class="m-4">
        <p>Após derrotar o mago, você chega em uma caverna.</p>
        <p>A caverna está quieta a princípio, mas logo você percebe uma criatura dormindo no chão.</p>
        <p>Repentinamente, a criatura se levanta e você pode ver seu rosto.</p>
        <p>A criatura é um troll, que acordou com a sua chegada e agora está furioso.</p>
        <p>O que você faz?</p>
        <Link to='/trollataque'><button class="button is-danger is-light is-outlined">Atacar</button></Link>
        <Link to='/trollfuga'><button class="button is-danger is-light is-outlined">Fugir</button></Link>
        </div>
    )
}

export default Troll