import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";
 
function NewTask({ sendId, allTasks, valueBoton, hijoAPadre }) {
  //enviar a componente padre
  const statusBtnNew = false;
  const statusBtnEdit = false;
  const show = false;
  const valueBtn = 0;
  //fin

  const [Title, setTitle] = useState("");
  const [Description, setTDescription] = useState("");
  const [Date, setDate] = useState("");
  const [Location, setLocation] = useState("");
  const [Responsible, setResponsible] = useState("");
  const [Status, setStatus] = useState("");
  const [Id, setId] = useState("");

  const addTask = () => {
    axios
      .post("http://127.0.0.1:8000/newtasks", {
        title: Title,
        description: Description,
        date: Date,
        location: Location,
        responsible: Responsible,
        status: Status,
      })
      .then(() => {
        allTasks();
        clearTask();
        //alert("tarea creada");
      });
  };

  ////////////////////fin insertar tarea/////////////////////////////////////////
  //error en consola por no tener valor idtaskk hasta q se da clic el boton

  const idTask = sendId;
  const getTask = "http://127.0.0.1:8000/whereId/";
  const url = getTask + idTask;
  const allTaskWhere = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setId(result.id);
        setTitle(result.title);
        setDate(result.date);
        setLocation(result.location);
        setResponsible(result.responsible);
        setStatus(result.status);
        setTDescription(result.description);
        // console.log(result);
      });
  };

  //ejecutar al renderizar y al cambiar el valo de idTask q manda el boton editar
  useEffect(() => {
    allTaskWhere();
  }, [idTask]);

  //Modificar tareas
  const updateTask = (id) => {
    axios
      .put(`http://127.0.0.1:8000/updatetasks/${id}`, {
        title: Title,
        description: Description,
        date: Date,
        location: Location,
        responsible: Responsible,
        status: Status,
      })
      .then(() => {
        // alert("tarea modificada");
        allTasks();
        clearTask();
      });
    //console.log(id);
  };
  //////////////////////////////////////////////////////////////////////////////////

  //Limpiar campos
  const clearTask = () => {
    setId("");
    setTitle("");
    setTDescription("");
    setDate("");
    setLocation("");
    setResponsible("");
    setStatus("");
  };

  return (
    <div className="container">
      <div>
        <h2>Agregar tareas </h2>
      </div>
      <div className="datos">
        <input
          value={Id}
          type="hidden"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Title
          </span>

          <input
            required
            value={Title}
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
            /* value={tasks.description} */
            value={Description}
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
            value={Date}
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
            value={Location}
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
            value={Responsible}
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
            Status
          </span>
          <input
            required
            value={Status}
            type="text"
            className="form-control"
            placeholder="Agrega un Responsable"
            aria-label="Status"
            aria-describedby="basic-addon1"
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          />
        </div>
        {valueBoton != 2 ? (
          <Button
            className="btn btn-success me-md-2"
            onClick={() => {
              addTask();
              hijoAPadre(statusBtnNew, statusBtnEdit, show, valueBtn);
            }}
          >
            Registrar
          </Button>
        ) : null}
        {valueBoton != 1 ? (
          <Button
            className="btn btn-file me-md-2"
            onClick={() => {
              updateTask(Id);
              hijoAPadre(statusBtnNew, statusBtnEdit, show, valueBtn);
            }}
          >
            Guardar cambios
          </Button>
        ) : null}

        <Button
          className="btn btn-file"
          onClick={() => {
            clearTask();
            hijoAPadre(statusBtnNew, statusBtnEdit, show, valueBtn);
          }}
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
}

export default NewTask;
