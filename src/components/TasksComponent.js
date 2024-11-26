import React, { useEffect, useState } from "react";

import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

import { DeleteTask } from "../services/tasks";
import "bootstrap/dist/css/bootstrap.min.css";

function TasksComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const updateCategory = async (tasks) => {
    console.log(tasks);
  };

  const deleteCategory = async (id) => {
    const url = `http://127.0.0.1:8000/deletetasks/${id}`;
    await DeleteTask(url);
    ReadTask();
  };

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    ReadTask();
  }, []);

  const ReadTask = () => {
    fetch("http://127.0.0.1:8000/tasks")
      .then((res) => res.json())
      .then((result) => {
        setTasks(result);
        //console.log(result);
      });
  };

  return (
    <>
      <Container>
        <Button className="btn btn-success" onClick={openModal}>
          Crear tarea
        </Button>

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
                  <button onClick={() => updateCategory(task)}>EDIT</button>
                  <button onClick={() => deleteCategory(task.id)}>
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={isOpen} onHide={closeModal}>
          <ModalHeader style={{ display: "block" }}></ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input className="form-control" type="text" name="id" id="id" />
              <br />
            </div>
            <label htmlFor="id">ID</label>
            <input className="form-control" type="text" name="id" id="id" />
            <br />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </Modal>
      </Container>

      {/*   <Modal>
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Personaje:</label>
            <input className="form-control" name="personaje" type="text" />
          </FormGroup>

          <FormGroup>
            <label>Anime:</label>
            <input className="form-control" name="anime" type="text" />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button>Editar</Button>
          <Button>Cancelar</Button>
        </ModalFooter>
      </Modal>

      <Modal>
        <ModalHeader>
          <div>
            <h3>Insertar Personaje</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Personaje:</label>
            <input className="form-control" name="personaje" type="text" />
          </FormGroup>

          <FormGroup>
            <label>Anime:</label>
            <input className="form-control" name="anime" type="text" />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button>Insertar</Button>
          <Button className="btn btn-danger">Cancelar</Button>
        </ModalFooter>
      </Modal> */}
    </>
  );
}

export default TasksComponent;
