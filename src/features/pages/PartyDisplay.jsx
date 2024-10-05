import { useNavigate } from "react-router-dom";
import { useGetPartyQuery, useDeletePartyMutation } from "./partySlice";

import "./PartyDisplay.css";

export default function PartyDisplay({ partyId, resetId }) {
	const {
		data: party,
		isLoading,
		error,
	} = useGetPartyQuery(partyId, { skip: !partyId });
	const [deleteParty] = useDeletePartyMutation();
	const nav = useNavigate();

	const removeParty = () => {
		deleteParty(partyId);
		nav(`/list`);
		resetId();
	};
	return (
		<>
			<h1>Party Display</h1>
			<output>
				{error ? (
					error.message
				) : isLoading ? (
					"Getting party details..."
				) : partyId ? (
					<div className="view">
						<h2>
							<div>{party.name}</div>
						</h2>
						<div>ID: {party.id}</div>
						<div>Cohort ID: {party.cohortId}</div>
						<div>Date: {party.date}</div>
						<div>Location: {party.location}</div>
						<div>
							Description: <div>{party.description}</div>
						</div>
						<div className="view-button" onClick={removeParty}>
							Delete this entry
						</div>
					</div>
				) : (
					<></>
				)}
			</output>
		</>
	);
}
