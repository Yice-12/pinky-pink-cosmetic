// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTask } from "../slices/carrito";

// export const Contact = () => {
//   const [valueInput, setValueInput] = useState("");
//   const state = useSelector((state) => state.taskAll.arrayTask);
//   const dispacth = useDispatch();

//   const handleChange = (e) => {
//     setValueInput(e.target.value);
//   };
//   const handleAddTask = () => {
//     if (valueInput) {
//       dispacth(addTask({ id: 1, nombre: valueInput, estado: "pendiente" }));
//     }
//   };
//   const handleDeleteTask = (id) => {
//     dispacth(deleteTask(id));
//   };

//   return (
//     <div>
//       <h1>Tareas</h1>
//       <input
//         placeholder="Escribe aqui tus tareas..."
//         type="text"
//         name="name"
//         // value={}
//         onChange={handleChange}
//       />
//       <button onClick={() => handleAddTask()}>agregar</button>
//       <ul>
//         {state.map((task, i) => (
//           <li key={i}>
//             {task.nombre}
//             <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
