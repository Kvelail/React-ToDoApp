import './App.css';
import { useRef, useState, useEffect } from 'react';

import Header from '../Header';
import Search from '../SearchTodo';
import AddTodo from '../AddTodo';
import TodoList from '../TodoList';

import LOCAL_STORAGE_KEY from '../../static';

const App = () => {

  const [todoList, setTodoList] = useState(
    () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  const [searchTerm, setSearchTerm] = useState('');

  const newTodoRef = useRef(null);

  const [hasZeroTodos, setHasZeroTodos] = useState(true);
  
  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="main">
        <Header />
        <Search setSearchTerm={ setSearchTerm } />
        <TodoList todoList={ todoList } 
                  setTodoList={ setTodoList } 
                  searchTerm={ searchTerm }
                  hasZeroTodos={ hasZeroTodos }
                  setHasZeroTodos={ setHasZeroTodos } />
        <AddTodo newTodoRef={ newTodoRef }
                 setTodoList={ setTodoList }
                 setHasZeroTodos={ setHasZeroTodos } />
    </div>
  );
}

export default App;
