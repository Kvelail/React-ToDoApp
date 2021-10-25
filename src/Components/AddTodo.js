import { FaArrowAltCircleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ newTodoRef, setTodoList, setHasZeroTodos }) => {

    const handleAddTodo = e => {

        e.preventDefault();

        const todoName = newTodoRef.current.value.trim();

        if (!todoName) return;

        const todo = { id : uuidv4(), name : todoName, isCompleted : false }

        setTodoList(previousTodoList => [todo, ...previousTodoList]);

        newTodoRef.current.value = null;

        setHasZeroTodos(false);

    };

    return (
        <div className="add-todo">
            <form className="add-todo__form"
                  onSubmit={ handleAddTodo }>
                <input type="text"
                       maxLength="30" 
                       placeholder="Add todo..." 
                       className="add-todo__input"
                       ref={ newTodoRef }/>
                <button type="submit" 
                        className="app__btn">
                    <FaArrowAltCircleRight />
                </button>
            </form>
        </div>
    );
}
 
export default AddTodo;