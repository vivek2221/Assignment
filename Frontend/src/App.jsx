import { useNavigate } from "react-router-dom"
import Content from "./Content.jsx"
import NavBar from "./NavBar.jsx"

function App() {
    const navigate=useNavigate()
    const onClickFuncLogin=(e)=>{
        e.preventDefault()
       navigate('/login')
    }
    const onClickFuncRegister=(e)=>{
       e.preventDefault()
       navigate('/Register')
    }
  return (
    <div className="outerDivFirstPage">
        <NavBar LoginFunc={onClickFuncLogin} RegisterFunc={onClickFuncRegister}/>
        <Content LoginFunc={onClickFuncLogin} RegisterFunc={onClickFuncRegister}/>
    </div>
  )
}

export default App