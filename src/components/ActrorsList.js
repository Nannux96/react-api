import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card"


export default function ActorsList({actors, actresses}) {

	

	return <div className="componente">
		<div className="card-list">
		{actors.map(actor => <Card key={`actor_${actor.id}`} actor={actor}/>)}
		{actresses.map(actress => <Card key={`actress_${actress.id}`} actor={actress} />)}
		</div>
	</div>
}