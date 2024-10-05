import { useGetPartiesQuery } from "./partySlice";

export default function PartyList({ setPartyId }) {
	const { data: parties = [], isLoading, error } = useGetPartiesQuery();
	console.log(parties);
	return (
		<>
			<h1>Party List</h1>
			{parties.map((party, i) => (
				<div key={i} onClick={setPartyId}>
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
				</div>
			))}
		</>
	);
}
