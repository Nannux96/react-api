export default function Card({ actor }) {


	return <div className="card">
		<h2>{actor.name}</h2>
		<img className="card-image" src={actor.image} />
		<ul className="card-information-list">
			<li>year of birth: {actor.birth_year}</li>
			<li>nationality: {actor.nationality}</li>
			<li>biography: {actor.biography}</li>
			{Array.isArray(actor.awards) && <li>awards: <ol>
				{ actor.awards.map((award, i) => <li key={`award_${i}`}>{award}</li>)}
			</ol>
			</li>}
		</ul>
	</div>
}