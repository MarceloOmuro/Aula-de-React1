import { useLocation } from "react-router-dom";

function Empresas() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  //Capturar um parametro
  //searchParams.get("status");

  //listar todos os parametros da consulta
  searchParams.forEach((value, key) => {
    console.log(`${key} : ${value}`);
  });

  return (
    <>
      <h1>Empresa</h1>
    </>
  );
}

export default Empresas;
