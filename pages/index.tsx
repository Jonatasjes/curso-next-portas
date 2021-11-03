import { useState } from "react";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import { criarPortas } from "../functions/portas";
import PortaModel from "../models/porta";

export default function Home() {
  // const [p1, setP1] = useState(new PortaModel(1));

  const [portas, setPortas] = useState(criarPortas(3, 2));

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) => console.log(novaPorta)}
        />
      );
    });
  }

  return <div style={{ display: "flex" }}>{renderizarPortas()}</div>;
}
