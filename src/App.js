import "./styles.css";
import CrearTarea from "./componentes/CrearTarea";
import { useState } from "react";

export default function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <div className="App">
      <CrearTarea tareas={tareas} setTareas={setTareas} />
    </div>
  );
}
