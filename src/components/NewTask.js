import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";
function NewTask() {
  const [Title, setTitle] = useState("");
  const [Description, setTDescription] = useState("");
  const [Date, setDate] = useState("");
  const [Location, setLocation] = useState("");
  const [Responsible, setResponsible] = useState("");
  const [Likes, setLikes] = useState("");
  const addTask = () => {
    //alert(Title);

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
  return (
    <div className="App">
      <div className="datos">
        <label>
          Title:{" "}
          <input
            type="text"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
        </label>{" "}
        <br />
        <label>
          Description:{" "}
          <input
            type="text"
            onChange={(event) => {
              setTDescription(event.target.value);
            }}
          ></input>
        </label>{" "}
        <br />
        <label>
          Date:{" "}
          <input
            type="text"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          ></input>
        </label>{" "}
        <br />
        <label>
          Location:{" "}
          <input
            type="text"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          ></input>
        </label>{" "}
        <br />
        <label>
          Responsible:{" "}
          <input
            type="text"
            onChange={(event) => {
              setResponsible(event.target.value);
            }}
          ></input>
        </label>{" "}
        <br />
        <label>
          Likes:{" "}
          <input
            type="number"
            onChange={(event) => {
              setLikes(event.target.value);
            }}
          ></input>
        </label>
        <br />
        <Button onClick={addTask}>Registrar</Button>
      </div>
      {/* <TasksComponent></TasksComponent>; */}
      {/*  <NewTask></NewTask> */}
    </div>
  );
}
export default NewTask;
