import React, { useState } from "react";

const Componente2 = (props) => {
    const [contador, incrementar] = useState(1);
    const multiplicar = () => {
        incrementar(contador<10?contador+1:1);
    }
    return (
        <>
            <h1>Tabla del {props.tabla}</h1>
            <p>{props.tabla} * {contador} = {contador*props.tabla}</p>
            <button onClick={multiplicar}>
                Haz click!
            </button>
        </>
    );
}
export default Componente2;