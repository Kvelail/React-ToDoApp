const SelectAllBox = ({ handleSelectAll, selectAllBtnText }) => {
    return (
        <div className="select-all-box">
            <button type="button"
                    className="select-all-box__btn"
                    onClick={ handleSelectAll }>
                { selectAllBtnText }      
            </button>
        </div>
    );
}
 
export default SelectAllBox;