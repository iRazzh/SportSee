import logo from '../assets/logo.png'
import '../css//Header.css';

export default function Header() {
    return (
      <header>
        <img src={logo} alt="Logo de SportSee" />
        <nav>
            <p>Accueil</p>
            <p>Profil</p>
            <p>Réglage</p>
            <p>Communauté</p>
        </nav>
      </header>
    );
}