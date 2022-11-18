import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) =>{
    setTodos([...todos, newTodo])
  }

  const handleTodo = (itemRemove) =>{
    const newFilteredList = todos.filter(element =>{
       if(element !== itemRemove){
        return element
       }
    })
    setTodos(newFilteredList) 
  }

  return (
    <div className="App">
      <header className="App-header">
      <Form addTodo={addTodo}/>
      <TodoList todos={todos} handleTodo={handleTodo}/>
      </header>
    </div>
  );
}

export default App;
