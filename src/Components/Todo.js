import { FaCheckSquare, FaTrash } from 'react-icons/fa';

const Todo = ({ todo, todoList, setTodoList }) => {

    const LINE_STYLES = {
        textDecorationColor: 'crimson',
        textDecorationThickness: '3px',
        textDecorationStyle : 'solid',
        textDecorationLine : todo.isCompleted ? 'line-through' : 'none'
    };

    const handleCheckTodo = id => {

        const newTodoList = [...todoList];

        const todoToCheck = newTodoList.find(todo => todo.id === id);

        todoToCheck.isCompleted = !todoToCheck.isCompleted;

        setTodoList(newTodoList);
        
    };

    const handleDeleteTodo = id => {

        const newTodoList = todoList.filter(todo => todo.id !== id);

        setTodoList(newTodoList);
        
    };

    return (
        <li className="todo-list__item">
            <span className="todo-list__title" 
                  style={ LINE_STYLES }>{ todo.name }</span>
            <div className="todo-list__icons">
                <button type="button" 
                        className="todo-list__btn"
                        onClick={ () => handleCheckTodo(todo.id) }
                        style={{ color : todo.isCompleted ? 'crimson' : 'limegreen'}}>
                    <FaCheckSquare />
                </button>
                <button type="button" 
                        className="todo-list__btn"
                        onClick={ () => handleDeleteTodo(todo.id) }>
                    <FaTrash />
                </button>
            </div>
        </li>
    );
}
 
export default Todo;