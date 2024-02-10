import { useNavigate } from "react-router-dom"
import { Main, Navbar } from "./styles"
import exit from '../../assets/exit.svg'
import pdf from '../../assets/pdf.svg'
import search from '../../assets/search.svg'
import Modal from "../../components/modal"

export default function Dashboard() {
    const navigate = useNavigate()
    return (
        <Main>
        <Navbar>
            <img src={search} alt="SEARCH" />
            <img src={pdf} alt="PDF" />
            <img onClick={() => navigate('/')} src={exit} alt="EXIT" />
        </Navbar>
        <Modal isOpen={false}/>
        </Main>
    )
}