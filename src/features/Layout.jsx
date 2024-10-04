import { NavLink, Outlet } from "react-router-dom";

import "./Layout.css";

export default function Layout() {
	return (
		<>
			<header>
				<nav>
					<NavLink to={`/`}>Home</NavLink>
					<NavLink to={`/list`}>Party List</NavLink>
					<NavLink to={`/form`}>Add Party</NavLink>
					<NavLink to={`/viewer`}>Details</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}
