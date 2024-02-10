import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'
import { BoxLeft, BoxRigth, Login, LoginMedia, MasterBox } from './styles'


export default function Register() {
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
        <MasterBox>
            <BoxLeft><img src={logo} /></BoxLeft>
            <BoxRigth>
                <h1 id="welcome">Olá! <br />{welcome()}</h1>
                <Login>
                    <h2><span>Cadastre</span> sua conta</h2>
                    <input placeholder="Usuário" name="username" id="" />
                    <input placeholder='Email' type="email" name="" id="" />
                    <input placeholder="Senha" type="password" name="" id="" />
                    <input placeholder="Confirme a senha" type="password" name="" id="" />
                    <button onClick={() => navigate('/dashboard')}>Salvar</button>
                    <button onClick={() => navigate('/')}>Voltar</button>
                </Login>
                <LoginMedia>
                    <img src={google} alt="Google" />
                    <img src={facebook} alt="Facebook" />
                </LoginMedia>

            </BoxRigth>
        </MasterBox>
    )
}