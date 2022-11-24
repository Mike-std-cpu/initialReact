import React from "react";
import { useState } from "react";

const FromTodo = props =>{ // props = propiedades solos irven para leer.
    const [description, setDescription] = useState(""); //El estado de la pagina web
    const manejarSubmit = e => {
        e.priventDefault(); // Quita el coportamineto default de html
        console.log(description);
        setDescription("");
    }
    return (
        <form onSubmit={{manejarSubmit}}>
        <div className="todo-list">
            <div className="input">
                <input type="text" className="text" value={description} 
                onChange={e => setDescription(e.target.value)}/>
                <button className="button-blue" disabled={description ? "": "disabled"}>Agregar Tareas</button>
            </div>
        </div>
        </form>
    );
}

export default FromTodo;