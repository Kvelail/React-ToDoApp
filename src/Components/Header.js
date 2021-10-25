import { FaClipboardList } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
            <span className="header__icon">
                <FaClipboardList style={{
                    animation : 'bounce 4s ease-in-out infinite'
                }} />
            </span>
            <h1 className="header__title">
                kvelail's todo app
            </h1>
        </div>
    );
}
 
export default Header;