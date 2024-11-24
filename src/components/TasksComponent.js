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
    //console.log(id);
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
        <Button onClick={openModal}>insertar</Button>

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
          <ModalHeader></ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                className="form-control"
                type="text"
                name="id"
                id="id"
                readOnly
              />
              <br />
            </div>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </Modal>
      </Container>

      {/*    <form>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Formulario de producto
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">Nombre de producto </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">
                    Descripcion de producto
                  </label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Precio</label>
                  <input type="number" class="form-control" />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form> */}
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
