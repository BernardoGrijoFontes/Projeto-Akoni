import { useState } from "react"

function Dado(props) {
    const [dado, setDado] = useState();
    const girarDado = () => {
        let max = 6;
        let min = 1;
        let dado = Math.floor(Math.random() * (max - min + 1)) + min;
        setDado(dado);
        props.setDado(dado);
    };
    return (
        <div>
            <button class="button is-danger is-light is-outlined" onClick={girarDado}>Rolar o dado</button>
            <p>{dado}</p>

        </div>
    )
  }

export default Dado