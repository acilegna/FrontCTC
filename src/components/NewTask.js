import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";


/* function NewTask() { */
function NewTask({ sendNewTask }) {
  console.log(sendNewTask);
  const [Title, setTitle] = useState("");
  const [Description, setTDescription] = useState("");
  const [Date, setDate] = useState("");
  const [Location, setLocation] = useState("");
  const [Responsible, setResponsible] = useState("");
  const [Likes, setLikes] = useState("");

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
  const [Editar, setEditar] = useState(false);
  const editTask = (value) => {
    setEditar = true;

    setTitle(value.Title);
    setTDescription(value.Description);
    setDate(value.Title);
    setLocation(value.Title);
    setResponsible(value.Title);
    setLikes(value.Likes);
  };

  return (
    <div className="container">
      <div>
        <h2>Agregar tareas </h2>
      </div>
      <div className="datos">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Title
          </span>
          <input
            required
            type="text"
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
            className="form-control"
            placeholder="Likes"
            aria-label="Likes"
            aria-describedby="basic-addon1"
            onChange={(event) => {
              setLikes(event.target.value);
            }}
          />
        </div>

        <Button className="btn btn-success" onClick={addTask}>
          Registrar
        </Button>
      </div>
    </div>
  );
}
export default NewTask;
