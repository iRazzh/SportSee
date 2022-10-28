import '../../css/stats/ActiviteQuotidienne.css';

export default function ActiviteQuotidienne() {
    return (
      <>
        <article className="activites">
            <h2 className="title-activites">Activité quotidienne</h2>
            <div className="legende-activites">
                <p>Poids (kg)</p>
                <p>Calories brûlées (kCal)</p>
            </div>
            <section>
                graph
            </section>
        </article>
      </>
    );
}