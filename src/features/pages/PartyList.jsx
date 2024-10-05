import { useNavigate } from "react-router-dom";

import { useGetPartiesQuery } from "./partySlice";

import "./PartyList.css";

export default function PartyList({ setPartyId }) {
	const { data: parties = [], isLoading, error } = useGetPartiesQuery();
	const navigate = useNavigate();

	const sortParties = (a, b) => a.id - b.id;

	const selectParty = (id) => {
		setPartyId(id);
		navigate(`/viewer`);
	};

	return (
		<>
			<h1>Party List</h1>
			{error ? (
				<output>{error.message}</output>
			) : isLoading ? (
				<output>Loading party list...</output>
			) : (
				parties.toSorted(sortParties).map((party, i) => (
					<div key={i} className="list" onClick={() => selectParty(party.id)}>
						<h2>
							Name:{" "}
							<div>
								{party.name} #{party.id}
							</div>
						</h2>
						<div>
							<span>Location: {party.location}</span>
							<div>{party.description}</div>
						</div>
						<div className="list-button">Click to view details</div>
					</div>
				))
			)}
		</>
	);
}
