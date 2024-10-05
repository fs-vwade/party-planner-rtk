import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import "./styles/index.css";

createRoot(document.body).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);

// i just wanted to try this 🍍
Object.defineProperty(window, "phi", {
	value: Math.pow(5, 0.5) * 0.5 + 0.5,
	writable: false,
	enumerable: true,
	configurable: true,
});
