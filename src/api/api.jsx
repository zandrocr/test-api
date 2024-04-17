import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export async function Get(array, notServer) {
  instance
    .get("/users")
    .then((response) => array(response.data), notServer(true))
    .catch((err) => {
      notServer(err.code == "ERR_NETWORK" || false);
    });
}

export async function Post({ data, resp }) {
  instance
    .post("/users", {
      username: data.username,
      password: data.password,
    })
    .then((response) => resp(true))
    .catch((err) => console.log(err));
}

export async function Del(id, resp) {
  instance
    .delete(`/users/${id}`)
    .then((response) => resp(true))
    .catch((err) => null);
}
