import React from 'react';
import './App.css';
import Users from './components/Users';
function App() {
  return (
    <div className="App">
      <h1>l5_t5, задание 6: Список пользователей</h1>
      <p>Жизненный цикл компонента: <b>componentDidMount</b>, <b>componentDidUpdate</b></p>
        <Users />
    </div>
  );
}

export default App;
