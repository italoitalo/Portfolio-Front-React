// Form.js
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';

function Form({ onFormSubmit }) {
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/store', {
        cpf,
        email,
      });

      console.log(response.data); // Faça o que quiser com a resposta da API
      if (response.data !== 'criado com sucesso') {
        alert(response.data);
      }

      // Limpar os campos do formulário após o envio bem-sucedido
      setCpf('');
      setEmail('');

      // Chamar a função de callback fornecida pelo componente pai
      onFormSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formP">
      <InputMask
        mask="999.999.999-99"
        name="cpf"
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <input
        type="text"
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" value="Submit" className="buttonSub" />
    </form>
  );
}

export default Form;
