import { useState } from "react";

import { useAddPartyMutation } from "./partySlice";
import "./PartyForm.css";

export default function PartyForm() {
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [date, setDate] = useState("");
	const [description, setDescription] = useState("");

	const [addParty, { isLoading, error }] = useAddPartyMutation();

	const resetFields = () => {
		setName("");
		setDate("");
		setLocation("");
		setDescription("");
	};

	const partySubmit = async (event) => {
		event.preventDefault();

		try {
			addParty({
				name: name,
				date: date,
				location: location,
				description: description,
			});
		} catch (error) {
			console.error(error);
		}

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
						onChange={(e) => updateField(e, setDate)}
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
