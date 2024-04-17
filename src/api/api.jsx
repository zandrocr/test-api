import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export async function Get(array) {
  instance
    .get("/users")
    .then((response) => array(response.data))
    .catch((err) => console.log(err));
}

export async function Post({ data, resp }) {
  instance
    .post("/users", {
      username: data.username,
      password: data.password,
    })
    .then((response) => (resp(true), console.log(response.data)))
    .catch((err) => console.log(err));
}

export async function Dell(id) {
  instance
    .delete(`/users/${id}`)
    .then((response) => (resp(true), console.log(response.data)))
    .catch((err) => console.log(err));
}
