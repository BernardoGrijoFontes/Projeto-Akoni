import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Dragaofuga() {
    return (
        <div class="m-4">
        <p>Logo que percebe que você tenta correr, o dragão voa e te cospe fogo.</p>
        <p>Você não pode fugir.</p>
        <p>Você morreu.</p>
        <Link to='/dragao'><button class="button is-danger is-light is-outlined">Tentar novamente</button></Link>
        </div>
    )
}

export default Dragaofuga