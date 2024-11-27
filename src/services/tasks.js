import axios from "axios";

const InsertTask = async (url, data) => {
  return axios.post(url, data);
};

const DeleteTask = async (url) => {
  return axios.delete(url);
};

export { DeleteTask, InsertTask };
