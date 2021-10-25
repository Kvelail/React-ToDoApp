const ClearBox = ({ handleClearCompleted }) => {
    return (
        <div className="clear-box">
            <button type="button"
                    className="clear-box__btn"
                    onClick={ handleClearCompleted }>
                clear completed       
            </button>
        </div>
    );
}
 
export default ClearBox;