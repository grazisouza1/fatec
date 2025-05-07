import "./App.css";
import React, { useEffect, useState } from "react";

function ApiConsulta() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setDados(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários", error);
      });
  }, []);

  return (
    <div>
      {dados.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
}

export default ApiConsulta;
