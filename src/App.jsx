import "./App.css";
import { ListUser } from "./components/listUsers";
import { Form } from "./components/form";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 1000);
  }, [state]);

  return (
    <div>
      <Form state={setState} />
      <ListUser state={state} />
    </div>
  );
}

export default App;
