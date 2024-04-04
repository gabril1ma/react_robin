import { Link } from 'react-router-dom'

function Login(){

    return(
        <div>
            <h1>Login</h1>
            <form className="login-form">
                <label>Email</label>
                <input type="email" name="email" required/>
                <label>Senha</label>
                <input type="password" name="password" required/>
                <button type="submit">Entrar</button>
                <button><Link to="/create-account">Criar conta</Link></button>
                <button><Link to ="/">Voltar</Link></button>
            </form>
        </div>
    )
}

export default Login