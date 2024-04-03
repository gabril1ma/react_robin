import './Header.css';


function Header(){
    return(
        <header className="Header_navbar">
            <h1>Projeto estudos</h1>
            <nav>
                <ul className="items_navbar">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Produtos</a></li>
                    <li><a href="/">Conta</a></li>
                    <li><a href="/">Carrinho</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;