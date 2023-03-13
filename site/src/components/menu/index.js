
import {  Link } from 'react-router-dom';

import './index.scss'

export default function Index() {
    
    

    return (
      
        <nav className=" menuuu">
        <header>
            <div className="image-text">
                <span className="image">
                    
                </span>

                <div className="text logo-text">
                    <span className="name">Dental clinic</span>
                    <span className="profession">administrativo</span>
                </div>
            </div>

           
        </header>

        <div className="menu-bar">
            <div className="menu">

                <ul className="menu-links">
                    <li className="nav-link">
                    <Link to='/cadastrarp' >
                            <i className='bx bx-home-alt icon' ></i>
                            <span className="text nav-text">Dashboard</span>
                            </Link>
                    </li>

                    

                    <li className="nav-link">
                    <Link to='/cadastrarp' >
                            <i className='bx bx-bar-chart-alt-2 icon' ></i>
                            <span className="text nav-text">Cadastrar</span>
                            </Link>
                    </li>

                    <li className="nav-link">
                    <Link to='/consultarp' >
                            <i className='bx bx-bell icon'></i>
                            <span className="text nav-text">Consultar</span>
                            </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="#">
                            <i className='bx bx-pie-chart-alt icon' ></i>
                            <span className="text nav-text">....</span>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="#">
                            <i className='bx bx-heart icon' ></i>
                            <span className="text nav-text">.....</span>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="#">
                            <i className='bx bx-wallet icon' ></i>
                            <span className="text nav-text">.....</span>
                        </Link>
                    </li>

                </ul>
            </div> 
            <hr/>

            <div className="bottom-content">
                <li className="">
                <Link to='/' >
                        <i className='bx bx-log-out icon' ></i>
                        <span className="text nav-text">Sair</span>
                    </Link>
                </li>

                
            </div>
        </div>

    </nav>

    )
}
