import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./features/Layout";
import Home from "./features/pages/Home";
import PartyForm from "./features/pages/PartyForm";
import PartyList from "./features/pages/PartyList";
import PartyDisplay from "./features/pages/PartyDisplay";

export default function App() {
	const [selectedPartyId, setSelectedPartyId] = useState(null);

	const tree = createBrowserRouter([
		{
			path: `/`,
			element: <Layout />,
			children: [
				{ path: `/`, element: <Home /> },
				{
					path: `/form`,
					element: <PartyForm />,
				},
				{
					path: `/list`,
					element: <PartyList setPartyId={setSelectedPartyId} />,
				},
				{
					path: `/viewer`,
					element: <PartyDisplay partyId={selectedPartyId} />,
				},
			],
		},
	]);

	return <RouterProvider router={tree} />;
}
