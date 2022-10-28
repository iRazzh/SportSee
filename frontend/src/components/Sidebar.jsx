import '../css//Sidebar.css';
import meditation from '../assets/picto-meditation.png'
import natation from '../assets/picto-natation.png'
import velo from '../assets/picto-velo.png'
import muscu from '../assets/picto-muscu.png'

export default function Sidebar() {
    return (
      <section className="sidebar">
        <div></div>
        <div className="sidebar-pictos">
          <img src={meditation} alt="Picto représentant la méditation" />
          <img src={natation} alt="Picto représentant la natation" />
          <img src={velo} alt="Picto représentant le vélo" />
          <img src={muscu} alt="Picto représentant la musculation" />
        </div>
        <p>Copiryght, SportSee 2020</p>
      </section>
    );
}