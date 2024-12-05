import "./App.css";

import TasksComponent from "./components/Tareas/TasksComponent";
import NewTask from "./components/Tareas/NewTask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/tareas" element={<TasksComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div className="App">
 
  <LoginComponent></LoginComponent>
</div>;
 */
}
