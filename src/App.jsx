import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./features/Layout";
import PartyForm from "./features/pages/PartyForm";
import PartyList from "./features/pages/PartyList";
import PartyDisplay from "./features/pages/PartyDisplay";

const tree = createBrowserRouter([
	{
		path: `/`,
		element: <Layout />,
		children: [
			{ path: `/form`, element: <PartyForm /> },
			{ path: `/list`, element: <PartyList /> },
			{ path: `/viewer`, element: <PartyDisplay /> },
		],
	},
]);

export default function App() {
	return <RouterProvider router={tree} />;
}
