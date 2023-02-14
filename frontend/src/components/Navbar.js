import './Navbar.scss'

//Components
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill } from 'react-icons/bs'
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to={"/"}>ReactGram</Link>
      <form className='searchForm'>
        <BsSearch />
        <input type="text" placeholder='Pesquisar' />
      </form>
      <ul className="nav__links">
        <li>

          <NavLink to="/">
            <BsHouseDoorFill />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Entrar</NavLink>
        </li>
        <li>
          <NavLink to={"/register"}>Cadastrar</NavLink>
        </li>
      </ul>
    </nav>
  )
}
