import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "reactstrap";

//import NewTask from "./NewTask";
import { DeleteTask } from "../services/tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function TasksComponent() {
  const [Title, setTitle] = useState("");
  const [Description, setTDescription] = useState("");
  const [Date, setDate] = useState("");
  const [Location, setLocation] = useState("");
  const [Responsible, setResponsible] = useState("");
  const [Likes, setLikes] = useState("");
  const [Id, setId] = useState("");

  const addTask = () => {
    axios
      .post("http://127.0.0.1:8000/newtasks", {
        title: Title,
        description: Description,
        date: Date,
        location: Location,
        responsible: Responsible,
        likes: Likes,
      })
      .then(() => {
        alert("tarea creada");
      });
  };

  //////////////////END INSERTAR///////////////////////////////////////////////////////////////////////////////////////

  //declarar variable para control de edicion

  const [editar, setEditar] = useState(false);
  const editTask = (task) => {
    setEditar(true);
    setId(task.id);
    setTitle(task.title);
    setTDescription(task.description);
    setDate(task.date);
    setLocation(task.location);
    setResponsible(task.responsible);
    setLikes(task.likes);
  };

  const saveTask = (id) => {
    console.log(id);
    const url = `http://127.0.0.1:8000/updatetasks/${id}`;
    console.log(url);
    axios.put(url, {
      // id: Id,
      title: Title,
      description: Description,
      date: Date,
      location: Location,
      responsible: Responsible,
      likes: Likes,
    });
  };
  const limpiar = () => {
    setId("");
    setTitle("");
    setTDescription("");
    setDate("");
    setLocation("");
    setResponsible("");
    setLikes("");
  };
  ////////////////////////////////////END UPDATE/////////////////////////////////////////////////////////////////77
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    ReadTask();
  }, []);

  const deleteCategory = async (id) => {
    const url = `http://127.0.0.1:8000/deletetasks/${id}`;
    await DeleteTask(url);
    ReadTask();
  };

  const ReadTask = () => {
    fetch("http://127.0.0.1:8000/tasks")
      .then((res) => res.json())
      .then((result) => {
        setTasks(result);
        //console.log(result);
      });
  };

  /*  prueba padre a hijo
  const [datos, estableceDatos] = useState("");
  const padreAHijo = () => {
    estableceDatos("dato desde padre.");
  }; */

  return (
    <>
      <Container>
        <Table>
          <thead>
            {" "}
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
                  {/* <button className="btn btn-info" onClick={() => padreAHijo()}>
                    EDIT
                  </button> */}
                  <button
                    className="btn btn-info"
                    onClick={() => editTask(task)}
                  >
                    EDIT
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCategory(task.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="container">
          <div>
            {/* <h2>Agregar tareas {padreAHijo}</h2> */}
            <h2>Agregar tareas </h2>
          </div>
          <div className="datos">
            <div className="input-group mb-3">
              <input
                type="hidden"
                value={Id}
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
              <span className="input-group-text" id="basic-addon1">
                Title
              </span>
              <input
                required
                type="text"
                value={Title}
                className="form-control"
                placeholder="Agrega un titulo"
                aria-label="Title"
                aria-describedby="basic-addon1"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                description
              </span>
              <input
                required
                type="text"
                value={Description}
                className="form-control"
                placeholder="Agrega una descripcion"
                aria-label="description"
                aria-describedby="basic-addon1"
                onChange={(event) => {
                  setTDescription(event.target.value);
                }}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Date
              </span>
              <input
                required
                type="date"
                value={Date}
                className="form-control"
                placeholder="Ingresa una fecha"
                aria-label="Date"
                aria-describedby="basic-addon1"
                onChange={(event) => {
                  setDate(event.target.value);
                }}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Location
              </span>
              <input
                required
                type="text"
                value={Location}
                className="form-control"
                placeholder="Agrega una locacion"
                aria-label="Location"
                aria-describedby="basic-addon1"
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Responsible
              </span>
              <input
                required
                type="text"
                value={Responsible}
                className="form-control"
                placeholder="Agrega un Responsable"
                aria-label="Responsible"
                aria-describedby="basic-addon1"
                onChange={(event) => {
                  setResponsible(event.target.value);
                }}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Likes
              </span>
              <input
                required
                type="number"
                value={Likes}
                className="form-control"
                placeholder="Likes"
                aria-label="Likes"
                aria-describedby="basic-addon1"
                onChange={(event) => {
                  setLikes(event.target.value);
                }}
              />
            </div>
            {editar ? (
              <>
                <Button className="btn btn-success" onClick={saveTask(Id)}>
                  Guardar
                </Button>
                <Button className="btn btn-default" onClick={limpiar}>
                  Cancelar
                </Button>
              </>
            ) : (
              <Button className="btn btn-success" onClick={addTask}>
                Registrar
              </Button>
            )}
          </div>
        </div>

        {/*  <NewTask padreAHijo={datos} /> */}
      </Container>
    </>
  );
}

export default TasksComponent;
