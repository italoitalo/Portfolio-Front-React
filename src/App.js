import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';
import './App.css';
import Form from './Form';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/index');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFormSubmit = () => {
    fetchData();
  };

  const handleItemUpdate = () => {
    fetchData();
  };

  const handleItemDelete = () => {
    fetchData();
  };

  return (
    <div className="App">
      <h1>Indique um amigo</h1>
      <Form onFormSubmit={handleFormSubmit} />
      <h2>Indicações realizadas</h2>
      <ItemList
        items={items}
        onItemUpdate={handleItemUpdate}
        onItemDelete={handleItemDelete}
      />
    </div>
  );
}

export default App;
