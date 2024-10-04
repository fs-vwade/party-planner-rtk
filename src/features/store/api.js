import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "ThePugnificentParty";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${encodeURI(
	COHORT_CODE
)}/`;

// TODO: configure createApi to use API_URL as the base URL
// TODO: add "Puppy" as a tag type.
const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: () => ({}),
	tagTypes: ["Party"],
});

export default api;
