import { MdManageSearch } from 'react-icons/md';

const SearchTodo = ({ setSearchTerm }) => {

    return (
        <div className="search-todo">
            <form className="search-todo__form">
                <input type="text" 
                       placeholder="Search todo..." 
                       className="search-todo__input"
                       onChange={ e => setSearchTerm(e.target.value) }/>
                <button type="button" 
                        className="app__btn">
                    <MdManageSearch />
                </button>
            </form>
        </div>
    );
}
 
export default SearchTodo;