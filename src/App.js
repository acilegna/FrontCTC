import "./App.css";

import TasksComponent from "./components/Tareas/TasksComponent";
import NewTask from "./components/Tareas/NewTask";
import LoginComponent from "./login/Login";

function App() {
  return (
    <div className="App">
     {/*  <TasksComponent></TasksComponent> */}
      <LoginComponent></LoginComponent>
      {/*   <NewTask></NewTask> */}
    </div>
  );
}

export default App;
