import '../../css/stats/Calories.css';
import calories from '../../assets/calories.png'
import protein from '../../assets/protein.png'
import glucides from '../../assets/glucides.png'
import lipides from '../../assets/lipides.png'


export default function Calories() {
    return (
      <>
        <article className="calories">
            <section>
                <img src={calories} alt="Picto représentant les calories" />
                <p>1,930kCal <span>Calories</span></p>
            </section>
            <section>
                <img src={protein} alt="Picto représentant les protéines" />
                <p>155g <span>Proteines</span></p>
            </section>
            <section>
                <img src={glucides} alt="Picto représentant les glucides" />
                <p>290g <span>Glucides</span></p>
            </section>
            <section>
                <img src={lipides} alt="Picto représentant les lipides" />
                <p>50g <span>Lipides</span></p>
            </section>
        </article>
      </>
    );
}