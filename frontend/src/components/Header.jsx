import logo from '../assets/logo.png'
import '../css//Header.css';
import { Link } from "react-router-dom"

export default function Header() {
    return (
      <header>
        <Link to='/'><img src={logo} alt="Logo de SportSee" /></Link>
        <nav>
            <p>Accueil</p>
            <p>Profil</p>
            <p>Réglage</p>
            <p>Communauté</p>
        </nav>
      </header>
    );
}