import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card"


export default function ActorsList(props) {

	const apiUrl = "https://lanciweb.github.io/demo/api";
	const actorsEndpoint = "actors"
	const actressesEndpoint = "actresses"

	const [actors, setActors] = useState([])
	const [actresses, setActresses] = useState([])

	function getActors() {
		axios.get(`${apiUrl}/${actorsEndpoint}`).then((r) => {
			console.log("Attori", r.data);

			setActors(r.data)
		}).catch((e) => {
			console.log("Errore", e.message);
		})
	}

	function getActresses() {
		axios.get(`${apiUrl}/${actressesEndpoint}`).then((r) => {
			console.log("Attrici", r.data);
			setActresses(r.data)
		}).catch((e) => {
			console.log("Errore", e.message);
		})
	}

	useEffect(() => {
		getActors()
		getActresses()
	}, [])

	return <div className="componente">
		<div className="card-list">
		{actors.map(actor => <Card key={`actor_${actor.id}`} actor={actor}/>)}
		{actresses.map(actress => <Card key={`actress_${actress.id}`} actor={actress} />)}
		</div>
	</div>
}