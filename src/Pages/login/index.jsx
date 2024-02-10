import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Login() {
const navigate = useNavigate()
    function welcome() {
        const data = new Date()
    
        const hora = data.getHours()
    
        if (hora >= 0 && hora < 12) {
            return ' Bom Dia'
    
          } else if (hora >= 12 && hora < 18) {
            return ' Boa Tarde'
            
        
          } else {
            return ' Boa Noite'
          }
      }

    return (
        <div class="master-box">
    <section class="box-left"><img src={logo}/></section>
    <section class="box-rigth">
        <h1 id="welcome">Olá! <br />{welcome()}</h1>
        <div class="login">
            <h2><span>Entre</span> em sua conta</h2>
            <input placeholder="Usuário" name="username" id=""/>
            <input placeholder="Senha" type="password" name="" id=""/>
            <a class="forget-password">Esqueceu sua senha?</a>
            <button onClick={() => navigate('/dashboard')}>Login</button>
            <a onClick={() => navigate('/register')} type='text' class="create-account">Crie sua conta</a>

        </div>
    </section>
    </div>
    )
}