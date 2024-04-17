import "./App.css";
import { Get, Post } from "./api/api";
import { useEffect, useState } from "react";
import { ListUser } from "./components/listUsers";

function App() {
  const [username, setUsername] = useState("tz6v@live.com");
  const [password, setPassword] = useState("gasdgatet");
  const [response, setResponse] = useState(false);
  const [array, setArray] = useState([]);

  useEffect(() => {
    Get(setArray);
    if (response == true) {
      setTimeout(() => {
        setResponse(false);
        setUsername("");
        setPassword("");
      }, 2000);
    }
  }, [response]);

  function submitForm(e) {
    e.preventDefault();
    Post({ data: { username, password }, resp: setResponse });
  }

  return (
    <div>
      <button onClick={Get}>Get</button>
      {response == true ? (
        <p>Cadastro realizado com sucesso!</p>
      ) : (
        <form onSubmit={submitForm}>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="E-mail"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Entrar</button>
        </form>
      )}
      <ListUser array={array} />
    </div>
  );
}

export default App;
