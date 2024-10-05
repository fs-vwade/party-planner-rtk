import api from "../../store/api";

const partyApi = api.injectEndpoints({
	endpoints: (build) => ({
		getParties: build.query({
			query: () => `events`,
			providesTags: [`Party`],
			transformResponse: (response) => response.data,
		}),
		getParty: build.query({
			query: (id) => `events/${id}`,
			providesTags: [`Party`],
		}),
		addParty: build.mutation({
			query: () => `events/`,
			invalidatesTags: [`Party`],
		}),
		deleteParty: build.mutation({
			query: (id) => `events/${id}`,
			invalidatesTags: [`Party`],
		}),
	}),
});

export const {
	useGetPartiesQuery,
	useGetPartyQuery,
	useAddPartyMutation,
	useDeletePartyMutation,
} = partyApi;
