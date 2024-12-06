import "./App.css";
import TasksComponent from "./components/Tareas/TasksComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/login/Login";

import { AuthProvider } from "./provider/AuthProvide";
import Logear from "./components/login/Logear";

function App() {
  return (
    <AuthProvider>
      <Logear />
      <TasksComponent/>
    </AuthProvider>
  );
  /* return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/tareas" element={<TasksComponent />} />
      </Routes>
    </BrowserRouter>
  ); */
}

export default App;
