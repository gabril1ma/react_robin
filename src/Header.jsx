import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="Header_navbar">
            <h1>Projeto estudos</h1>
            <nav>
                <ul className="items_navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/create-account">Conta</Link></li>
                    <li><Link to="/cart">Carrinho</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;