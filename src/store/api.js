import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "🍍";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT_CODE}/`;

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: encodeURI(API_URL),
	}),
	endpoints: () => ({}),
	tagTypes: ["Party"],
});

export default api;
