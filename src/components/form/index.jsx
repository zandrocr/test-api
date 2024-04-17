import { useEffect, useState } from "react";
import { Post } from "../../api/api";

export function Form() {
  const [username, setUsername] = useState("tz6v@live.com");
  const [password, setPassword] = useState("gasdgatet");
  const [response, setResponse] = useState(false);

  useEffect(() => {
    if (response == true) {
      setTimeout(() => {
        setResponse(false);
        setUsername("");
        setPassword("");l
      }, 2000);
    }
  }, [response]);

  function submitForm(e) {
    e.preventDefault();
    Post({ data: { username, password }, resp: setResponse });
  }

  return (
    <section>
      {response == true ? (
        <p>Cadastro realizado com sucesso!</p>
      ) : (
        <form onSubmit={submitForm}>
          <label htmlFor="username">E-mail</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="E-mail"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Criar</button>
        </form>
      )}
    </section>
  );
}
