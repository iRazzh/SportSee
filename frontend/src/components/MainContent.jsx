import '../css/MainContent.css';
import ActiviteQuotidienne from './stats/ActiviteQuotidienne'
import Calories from './stats/Calories.jsx'
import StatsGraph from './stats/StatsGraph'


export default function MainContent() {
    return (
      <main>
        <h1 className="hello">Bonjour <span>Thomas</span></h1>
        <p className="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
       
        <section className="stats">
          <ActiviteQuotidienne />
          <Calories />
          <StatsGraph />
        </section>
      </main>

    );
}