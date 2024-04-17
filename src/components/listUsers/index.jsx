import { Dell } from "../../api/api";

export function ListUser({ array }) {
  function Dellete(id) {
    Dell(id);
  }
  
  return (
    <header>
      {array.map((i) => {
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
            <button onClick={() => Dellete(i.id)}>Deletar</button>
          </section>
        );
      })}
    </header>
  );
}
