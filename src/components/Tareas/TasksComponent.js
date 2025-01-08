import React, { useEffect, useState } from "react";
import { Table, Container } from "reactstrap";
import axios from "axios";
import NewTask from "./NewTask";

import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "../Header/HeaderComponent";

function TasksComponent() {
  const [tasks, setTasks] = useState([]);

  const [show, setShow] = useState(false);
  const [statusBtnNew, setStatusBtnNew] = useState(false);
  const [statusBtnEdit, setStatusBtnEdit] = useState(false);
  const [valueBtn, setValueBtn] = useState(0);

  // Recibe datos de hijo(Newtask)a padre (TaskComponent)
  const hijoAPadre = (BtnNew, BtnEdit, show, valueBtn) => {
    setStatusBtnNew(BtnNew);
    setStatusBtnEdit(BtnEdit);
    setShow(show);
    setValueBtn(valueBtn);
    sendId(valueBtn);
  };
  //End

  const likes = 1;

  useEffect(() => {
    allTasks();
  }, []);

  //Funcion registrar likes
  const addLikes = (id, likes) => {
    axios.post(`http://127.0.0.1:8000/increment/${id}/${likes}`).then(() => {
      allTasks();
    });
  };

  //Funcion eliminar tareas
  const deleteCategory = (id) => {
    axios.delete(`http://127.0.0.1:8000/deletetasks/${id}`).then(() => {
      allTasks();
    });
  };

  //Funcion mostrar todas las tareas
  const allTasks = () => {
    fetch("http://127.0.0.1:8000/tasks")
      .then((res) => res.json())
      .then((result) => {
        setTasks(result);
      });
  };

  /*  envio de Datos padre a hijo */
  const [id, setId] = useState([]);

  const sendId = (id_tasks) => {
    setId(id_tasks);
  };
  /*  END   */

  //Funciones para generar reporte api ruby on rails
  const getPopular = () => {
    axios
      .get("http://127.0.0.1:3001/popularTask")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const getReport = () => {
    axios
      .get("http://127.0.0.1:3001/report")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  // END

  //  obtener valor del btn que ha sido presionado
  const valueBoton = (event) => {
    setValueBtn(event.target.id);
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>
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
              <th>status</th>
              <th>likes</th>
              <th>Operaciones</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.date}</td>
                <td>{task.location}</td>
                <td>{task.responsible}</td>
                <td>{task.status}</td>
                <td>{task.likes}</td>
                <td>
                  <button
                    className="btn btn-info me-md-2"
                    disabled={statusBtnEdit}
                    onClick={(event) => {
                      setStatusBtnNew(true);
                      valueBoton(event);
                      sendId(task.id);
                      setShow(true);
                    }}
                    id={"2"}
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
                    onClick={() => addLikes(task.id, likes)}
                  >
                    Like
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <button className="btn btn-primary me-md-2" onClick={getReport}>
          Reporte Terminado-Pendiente
        </button>
        <button className="btn btn-primary me-md-2" onClick={getPopular}>
          Reporte Popular
        </button>
        <button
          className="btn btn-primary me-md-2"
          disabled={statusBtnNew}
          onClick={(event) => {
            setShow(true);
            valueBoton(event);
            setStatusBtnEdit(true);
          }}
          id={"1"}
        >
          Nueva tarea
        </button>

        {/*  ENVIO DE DATOS A COMPONENTE HIJO , id de tarea para editar , 
        funcion allTasks para actualizar tabla de dtos,  valueBoton detectar boton presionado */}

        {show ? (
          <NewTask
            sendId={id}
            allTasks={allTasks}
            valueBoton={valueBtn}
            hijoAPadre={hijoAPadre}
          ></NewTask>
        ) : null}
      </Container>
    </>
  );
}

export default TasksComponent;
