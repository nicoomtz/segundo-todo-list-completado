import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tarea from "./Tarea";
import "./Creartarea.css";

function CrearTarea(props) {
  const [input, setInput] = useState(``);
  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nuevaTarea = {
      texto: input,
      id: uuidv4()
    };

    props.setTareas([nuevaTarea, ...props.tareas]);
  }

  function eliminarTarea(e) {
    const tareasActualizadas = props.tareas.filter(
      (tarea) => tarea.id !== e.target.id
    );
    props.setTareas(tareasActualizadas);
  }

  function tareaCompletada(e) {
    if (e.target.className === "tarea completada") {
      e.target.classList.remove("completada");
    } else {
      e.target.classList.add("completada");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input tpye="text" onChange={handleChange} />
        <button type="submit">Agregar Tarea</button>
      </form>
      <div className="lista-tareas">
        {props.tareas.map((tarea) => (
          <Tarea
            texto={tarea.texto}
            id={tarea.id}
            key={tarea.id}
            eliminarTarea={eliminarTarea}
            completada={tareaCompletada}
          />
        ))}
      </div>
    </div>
  );
}

export default CrearTarea;
