import { CgDanger } from 'react-icons/cg'; 

const MessageBox = ({ display }) => {
    return (
        <div className="message-box" style={ {display} }>
            <div className="message-box__message">
                <CgDanger size="1.7rem" />
                there are no selected todos
            </div>
        </div>
    );
}
 
export default MessageBox;