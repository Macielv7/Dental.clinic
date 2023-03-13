
import "./index.scss"
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>

      <header className="header">



        <Link to='/' className="logo"> Dental clinic  </Link>

        <nav className="navbar" >
          <Link to="#home">home</Link>
          <Link to="#about">sobre</Link>
          <Link to="#menu">menu</Link>
        
          <Link to="#book">book</Link>
        </nav>

        <Link to='/agendamento' className="btn">Faça o seu agendamento</Link>

      </header>
    </>
  )


}