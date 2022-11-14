import '../../css/stats/Calories.css';
import calories from '../../assets/calories.png'
import protein from '../../assets/protein.png'
import glucides from '../../assets/glucides.png'
import lipides from '../../assets/lipides.png'


/**
 * Allows you to build everything that concerns the calories of the subject
 * @param {*} Props : Will pass in props all the values necessary for the calories of the subject
 * @returns 'Calories' Component
 */

export default function Calories(props) {
    return (
      <>
        <article className="calories">
            <section>
                <img src={calories} alt="Picto représentant les calories" />
                <p>{props.calorieCount} <span>Calories</span></p>
            </section>
            <section>
                <img src={protein} alt="Picto représentant les protéines" />
                <p>{props.proteinCount} <span>Proteines</span></p>
            </section>
            <section>
                <img src={glucides} alt="Picto représentant les glucides" />
                <p>{props.glucidesCount} <span>Glucides</span></p>
            </section>
            <section>
                <img src={lipides} alt="Picto représentant les lipides" />
                <p>{props.lipidesCount} <span>Lipides</span></p>
            </section>
        </article>
      </>
    );
}