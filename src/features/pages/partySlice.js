import api from "../store/api";

const partyApi = api.injectEndpoints({
	endpoints: (build) => ({
		getParties: build.query({}),
		getParty: build.query({}),
		addParty: build.mutation({}),
		deleteParty: build.mutation({}),
	}),
});

export const {
	useGetPartiesQuery,
	useGetPartyQuery,
	useAddPartyMutation,
	useDeletePartyMutation,
} = partyApi;
