import "./Tarea.css";

function Tarea({ texto, id, eliminarTarea, completada }) {
  return (
    <div className="tarea-container">
      <div className="tarea" id={id} key={id} onClick={completada}>
        {texto}
      </div>
      <button onClick={eliminarTarea} id={id} className="borrar">
        X
      </button>
    </div>
  );
}

export default Tarea;
