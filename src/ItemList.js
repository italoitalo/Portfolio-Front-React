// ItemList.js
import React from 'react';
import axios from 'axios';

const tradudor = ['Iniciada', 'Em processo', 'Finalizada'];

function ItemList({ items, onItemUpdate, onItemDelete }) {
  const handlePlus = async (itemId) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/indicacoes/adicionar-valor/${itemId}`,
      );
      console.log(response.data); // Faça o que quiser com a resposta da API
      if (response.data !== 'Valor adicionado com sucesso') {
        alert(response.data);
      }
      // Chamar a função de callback fornecida pelo componente pai
      onItemUpdate();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/delete/${itemId}`,
      );
      console.log(response.data); // Faça o que quiser com a resposta da API

      // Chamar a função de callback fornecida pelo componente pai
      onItemDelete();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <p className="mail">{item.email}</p>
          <p className="borderRe">{tradudor[item.status_id - 1]}</p>
          <span
            role="img"
            aria-label="Remover"
            className="icon"
            onClick={() => handlePlus(item.id)}
          >
            ⬆️
          </span>
          <span
            role="img"
            aria-label="Remover"
            className="icon"
            onClick={() => handleDelete(item.id)}
          >
            ❌
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
