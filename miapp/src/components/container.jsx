import React from "react";
import TaskList from "./taskList";
import FromTodo from "./FromTodo";

const Container = () =>{ // Funcion anonima, ya antes visto :)
    return (
        <div>
            Container. 🔥
            <FromTodo/>
            <TaskList/>
        </div>
    )
}

export default Container;// Exporta el contenido de nuestra funcion anonima