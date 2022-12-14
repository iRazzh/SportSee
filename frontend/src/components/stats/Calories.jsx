import '../../css/stats/Calories.css';
import calories from '../../assets/calories.png'
import protein from '../../assets/protein.png'
import glucides from '../../assets/glucides.png'
import lipides from '../../assets/lipides.png'

import PropTypes from 'prop-types';

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
                <p>{props.calorieCount}kCal <span>Calories</span></p>
            </section>
            <section>
                <img src={protein} alt="Picto représentant les protéines" />
                <p>{props.proteinCount}g <span>Proteines</span></p>
            </section>
            <section>
                <img src={glucides} alt="Picto représentant les glucides" />
                <p>{props.glucidesCount}g <span>Glucides</span></p>
            </section>
            <section>
                <img src={lipides} alt="Picto représentant les lipides" />
                <p>{props.lipidesCount}g <span>Lipides</span></p>
            </section>
        </article>
      </>
    );
}
Calories.propTypes = {
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    glucidesCount: PropTypes.number,
    lipidesCount: PropTypes.number
};