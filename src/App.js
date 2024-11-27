import "./App.css";
import TasksComponent from "./components/TasksComponent";
import NewTask from "./components/NewTask";
import { Button } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <TasksComponent></TasksComponent>
      {/* <NewTask></NewTask> */}
    </div>
  );
}

export default App;
