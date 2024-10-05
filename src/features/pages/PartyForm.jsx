import { useState } from "react";

import { useAddPartyMutation } from "./partySlice";
import "./PartyForm.css";

export default function PartyForm() {
	const [name, setName] = useState("interim adeptus meritus");
	const [date, setDate] = useState("");
	const [location, setLocation] = useState("conch & shell");
	const [description, setDescription] = useState("enigmatic prism");

	const [addParty, { isLoading, error }] = useAddPartyMutation();

	const resetFields = () => {
		setName("");
		setDate("");
		setLocation("");
		setDescription("");
	};

	const partySubmit = async (event) => {
		event.preventDefault();

		const new_party = {
			name: name,
			description: description,
			date: new Date(Date.parse(date)).toISOString(),
			location: location,
		};
		addParty(new_party);

		return;
	};

	const updateField = (e, f) => f(e.target.value);

	return (
		<>
			<h1>Party Form</h1>
			<form onSubmit={partySubmit} className="party">
				<label className="name">
					Name:{" "}
					<input
						type="text"
						value={name}
						onChange={(e) => updateField(e, setName)}
					/>
				</label>
				<label className="location">
					Location:{" "}
					<input
						type="text"
						value={location}
						onChange={(e) => updateField(e, setLocation)}
					/>
				</label>
				<label className="date">
					Date:{" "}
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</label>
				<label className="description">
					<div>Description: </div>
					<textarea
						type="text"
						value={description}
						onChange={(e) => updateField(e, setDescription)}
					/>
				</label>
				<button>Submit</button>
				{isLoading && <output>{"Sending party info..."}</output>}
				{error && <output>{error.message}</output>}
			</form>
		</>
	);
}
