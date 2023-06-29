import { useParams } from "react-router-dom";

function Empresas() {
  const { empresa } = useParams();

  const empresaToShow = `(${empresa})`;

  return (
    <div>
      <h1>Empresa {empresa && empresaToShow} </h1>
    </div>
  );
}

export default Empresas;
