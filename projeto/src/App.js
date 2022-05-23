import Dado from "./Componentes/dado";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Teste from './Componentes/nome';
import Personagem from './Componentes/personagem';
import Inicio from "./Componentes/início";
import Guerreiro from "./Componentes/guerreiro";
import Guerreiroataque from "./Componentes/guerreiroAtaque";
import Guerreiroataque2 from "./Componentes/guerreiroAtaque2";
import Guerreiroataque3 from "./Componentes/guerreiroAtaque3";
import Guerreirofuga from "./Componentes/guerreiroFuga";
import Guerreirofuga2 from "./Componentes/guerreiroFuga2";
import Guerreirofuga3 from "./Componentes/guerreiroFuga3";
import Mago from "./Componentes/mago";
import Magoataque from "./Componentes/magoAtaque";
import Magoataque2 from "./Componentes/magoAtaque2";
import Magoataque3 from "./Componentes/magoAtaque3";
import Magofuga from "./Componentes/magoFuga";
import Magofuga2 from "./Componentes/magoFuga2";
import Magofuga3 from "./Componentes/magoFuga3";
import Troll from "./Componentes/troll";
import Trollataque from "./Componentes/trollAtaque";
import Trollataque2 from "./Componentes/trollAtaque2";
import Trollataque3 from "./Componentes/trollAtaque3";
import Trollfuga from "./Componentes/trollFuga";
import Trollfuga2 from "./Componentes/trollFuga2";
import Trollfuga3 from "./Componentes/trollFuga3";
import Tesouro from "./Componentes/tesouro";
import Mimico from "./Componentes/mímico";
import Dragao from "./Componentes/dragão";
import Dragaofuga from "./Componentes/dragaoFuga";
import Dragaoataque from "./Componentes/dragaoAtaque";
import Dragaoataque2 from "./Componentes/dragaoAtaque2";
import Dragaoataque3 from "./Componentes/dragaoAtaque3";
import Dragaoataque4 from "./Componentes/dragaoAtaque4";
import Dragaoataque5 from "./Componentes/dragaoAtaque5";
import Dragaoataque6 from "./Componentes/dragaoAtaque6";
import Dragaoataque7 from "./Componentes/dragaoAtaque7";
import Final from "./Componentes/final";

function App() {
  const [dado, setDado] = useState();
  return (
    <div class="content is-medium">
    <BrowserRouter>
      <nav class="navbar is-danger is-light content is-medium">
        <div class="navbar-menu">
          <div class="navbar-start">
        <Link class="navbar-item" to={'/nome'}>Jogar</Link>
        <Link class="navbar-item" to={'/personagem'}>Personagem</Link>
        </div>
        </div>
      </nav>
      <Routes>
          <Route path='/nome' element={<Teste></Teste>}></Route>
          <Route path='/personagem' element={<Personagem></Personagem>}></Route>
          <Route path='/inicio' element={<Inicio></Inicio>}></Route>
          <Route path='/guerreiro' element={<Guerreiro></Guerreiro>}></Route>
          <Route path='/guerreiroataque' element={<Guerreiroataque></Guerreiroataque>}></Route>
          <Route path='/guerreiroataque2' element={<Guerreiroataque2></Guerreiroataque2>}></Route>
          <Route path='/guerreiroataque3' element={<Guerreiroataque3></Guerreiroataque3>}></Route>
          <Route path='/guerreirofuga' element={<Guerreirofuga></Guerreirofuga>}></Route>
          <Route path='/guerreirofuga2' element={<Guerreirofuga2></Guerreirofuga2>}></Route>
          <Route path='/guerreirofuga3' element={<Guerreirofuga3></Guerreirofuga3>}></Route>
          <Route path='/mago' element={<Mago></Mago>}></Route>
          <Route path='/magoataque' element={<Magoataque></Magoataque>}></Route>
          <Route path='/magoataque2' element={<Magoataque2></Magoataque2>}></Route>
          <Route path='/magoataque3' element={<Magoataque3></Magoataque3>}></Route>
          <Route path='/magofuga' element={<Magofuga></Magofuga>}></Route>
          <Route path='/magofuga2' element={<Magofuga2></Magofuga2>}></Route>
          <Route path='/magofuga3' element={<Magofuga3></Magofuga3>}></Route>
          <Route path='/troll' element={<Troll></Troll>}></Route>
          <Route path='/trollataque' element={<Trollataque></Trollataque>}></Route>
          <Route path='/trollataque2' element={<Trollataque2></Trollataque2>}></Route>
          <Route path='/trollataque3' element={<Trollataque3></Trollataque3>}></Route>
          <Route path='/trollfuga' element={<Trollfuga></Trollfuga>}></Route>
          <Route path='/trollfuga2' element={<Trollfuga2></Trollfuga2>}></Route>
          <Route path='/trollfuga3' element={<Trollfuga3></Trollfuga3>}></Route>
          <Route path='/tesouro' element={<Tesouro></Tesouro>}></Route>
          <Route path='/mimico' element={<Mimico></Mimico>}></Route>
          <Route path='/dragao' element={<Dragao></Dragao>}></Route>
          <Route path='/dragaofuga' element={<Dragaofuga></Dragaofuga>}></Route>
          <Route path='/dragaoataque' element={<Dragaoataque></Dragaoataque>}></Route>
          <Route path='/dragaoataque2' element={<Dragaoataque2></Dragaoataque2>}></Route>
          <Route path='/dragaoataque3' element={<Dragaoataque3></Dragaoataque3>}></Route>
          <Route path='/dragaoataque4' element={<Dragaoataque4></Dragaoataque4>}></Route>
          <Route path='/dragaoataque5' element={<Dragaoataque5></Dragaoataque5>}></Route>
          <Route path='/dragaoataque6' element={<Dragaoataque6></Dragaoataque6>}></Route>
          <Route path='/dragaoataque7' element={<Dragaoataque7></Dragaoataque7>}></Route>
          <Route path='/final' element={<Final></Final>}></Route>
       </Routes>
      </BrowserRouter>
      </div>
  );
};

export default App;
