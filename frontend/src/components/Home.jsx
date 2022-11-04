import { Link } from "react-router-dom"
import '../css/Home.css';
import MaleUser from "../assets/male-user.png"
import FemaleUser from "../assets/female-user.png"


export default function Home() {
    return (
        <main className="home">
            <section>
                <Link to="/user/12">
                    <article>
                        <h2>Utilisateur 12</h2>
                        <img src={MaleUser} alt="Emoticone d'un utilisateur masculin" />
                    </article>
                </Link>
                <Link to="/user/18">
                    <article>
                        <h2>Utilisatrice 18</h2>
                        <img src={FemaleUser} alt="Emoticone d'une utilisatrice féminine" />
                    </article>
                </Link>
            </section>
        </main>
    )
  }