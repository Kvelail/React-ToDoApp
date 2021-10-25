import Todo from './Todo';
import { useEffect, useState } from 'react';
import ClearBox from './ClearBox';
import MessageBox from './MessageBox';
import SelectAllBox from './SelectAllBox';

const TodoList = ({ todoList, 
                    setTodoList, 
                    searchTerm,
                    hasZeroTodos,
                    setHasZeroTodos }) => {

    const [display, setDisplay] = useState('none');

    const [selectAllBtnText, setSelectAllBtnText] = useState('select all');

    const handleClearCompleted = () => {

        const uncheckedTodos = todoList.filter(todo => !todo.isCompleted).length;
        
        if (uncheckedTodos === todoList.length) {
            setDisplay('flex');
        }

        setTimeout(() => {
            setDisplay('none');
        }, 2000);

        const newTodoList = todoList.filter(todo => !todo.isCompleted);

        setTodoList(newTodoList);

    };

    const handleSelectAll = () => {

        const newTodoList = [...todoList];

        if (selectAllBtnText === 'select all') {

            newTodoList.map(todo => todo.isCompleted = true);
    
            setTodoList(newTodoList);
    
            setSelectAllBtnText('deselect all');
        }

        if (selectAllBtnText === 'deselect all') {

            newTodoList.map(todo => todo.isCompleted = false);
    
            setTodoList(newTodoList);
    
            setSelectAllBtnText('select all');
        }

    };

    useEffect(() => {

        todoList.length === 0 ? setHasZeroTodos(true) : setHasZeroTodos(false);

    }, [todoList, setHasZeroTodos]);

    return <>
        { hasZeroTodos && (
            <div className="todo-list">
                <p className="todo-list__zero-todos">
                    <span className="todo-list__zero">0</span>
                    Active Todos...
                    <small>Please add todo</small>
                </p>
            </div> 
        )}
        { !hasZeroTodos && (
            <ul className="todo-list">
                { todoList
                    .filter(todo => 
                        todo.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
                    .map(todo => (
                        <Todo key={ todo.id } 
                            todo={ todo } 
                            todoList={ todoList }
                            setTodoList={ setTodoList }/>
                )) }
                <SelectAllBox handleSelectAll={ handleSelectAll }
                              selectAllBtnText={ selectAllBtnText } />
                <ClearBox handleClearCompleted={ handleClearCompleted } />
                <MessageBox display={ display } />
            </ul>
        )}
    </>
}
 
export default TodoList;