import React, { useEffect, useState } from "react";
import { Table, Container } from "reactstrap";
import axios from "axios";
import NewTask from "./NewTask";

import "bootstrap/dist/css/bootstrap.min.css";

function TasksComponent() {
  const [tasks, setTasks] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    SelectTask();
  }, []);

  const addLikes = (id, likes) => {
    //alert(id);
    //alert(likes);
    axios.post(`http://127.0.0.1:8000/increment/${id}/${likes}`).then(() => {
      //alert("like registrado");
      SelectTask();
    });
  };

  const deleteCategory = (id) => {
    axios.delete(`http://127.0.0.1:8000/deletetasks/${id}`).then(() => {
      alert("tarea eliminada");
      SelectTask();
    });
  };
  const SelectTask = () => {
    fetch("http://127.0.0.1:8000/tasks")
      .then((res) => res.json())
      .then((result) => {
        setTasks(result);
        //console.log(result);
      });
  };

  /*  envio de Datos padre a hijo */
  const [datos, estableceDatos] = useState([]);
  const sendToNewTask = (tasks) => {
    estableceDatos(tasks);
  };

  return (
    <>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>descripcion</th>
              <th>date</th>
              <th>locacion</th>
              <th>responsable</th>
              <th>likes</th>
              <th>Operaciones</th>
            </tr>
          </thead>
          {/*   <tbody></tbody> */}
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.date}</td>
                <td>{task.location}</td>
                <td>{task.responsible}</td>
                <td>{task.likes}</td>
                <td>
                  <button
                    className="btn btn-info me-md-2"
                    onClick={() => sendToNewTask(task.id)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger me-md-2"
                    onClick={() => deleteCategory(task.id)}
                  >
                    Delete
                  </button>

                  <button
                    className="btn btn-primary"
                    onClick={
                      /* () => setLikes(likes + 1), */
                      () => addLikes(task.id, likes + 1)
                    }
                  >
                    Like
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <NewTask sendToNewTask={datos} />
      </Container>
    </>
  );
}

export default TasksComponent;
