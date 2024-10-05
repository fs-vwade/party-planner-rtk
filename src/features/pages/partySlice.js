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
			transformResponse: (response) => response.data,
		}),
		addParty: build.mutation({
			query: (party) => ({
				url: `events/`,
				method: "POST",
				body: party,
			}),
			invalidatesTags: [`Party`],
			transformErrorResponse: (response) => response.error.message,
		}),
		deleteParty: build.mutation({
			query: (id) => ({
				url: `events/${id}`,
				method: "DELETE",
			}),
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
