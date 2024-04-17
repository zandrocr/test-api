import { useEffect, useState } from "react";
import { Del, Get } from "../../api/api";

export function ListUser(state) {
  const [array, setArray] = useState([]);
  const [notServer, setNotServer] = useState(false);
  const [response, setResponse] = useState(false);

  useEffect(() => {
    Get(setArray, setNotServer);
    setResponse(false);
  }, [response, state]);

  function Delete(id) {
    Del(id, setResponse);
  }

  return (
    <header>
      {notServer == false ? (
        <p>Sem resultados no momento</p>
      ) : (
        array.map((i) => {
          return (
            <section key={i.id}>
              <h2>Dados</h2>
              <ul>
                <li>
                  <strong>Id: </strong>
                  {i.id}
                </li>
                <li>
                  <strong>Nome: </strong>
                  {i.username}
                </li>
                <li>
                  <strong>Entrada: </strong>
                  {i.data_criacao}
                </li>
              </ul>
              <button onClick={() => Delete(i.id)}>Deletar</button>
            </section>
          );
        })
      )}
    </header>
  );
}
