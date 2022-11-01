import logo from '../img/logo.png';
import '../styles/Header.css';

export const Header = () => (
    <header className='header'>
        <nav className='header-nav'>
            <img className='nav-img' src={logo} alt="imagen" />
            <ul className='nav-list'>
                <li>Inicio</li>
                <li>
                    <a href="#about">Sobre mi</a>
                </li>
                <li>
                    <a href="#tec">Tecnologias</a>
                </li>
                <li>
                    <a href="#pro">Proyectos</a>
                </li>
                <li>
                    <a href="#cc">Contactame</a>
                </li>
            </ul>
        </nav>
    </header>
)