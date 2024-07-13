import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import loadingContext from "./Context/loadingContext";
import cepContext from "./Context/cepContext";

import Home from "./Components/Home";

function App() {

	const [responseCep, setResponseCep] = useState({});
	const [loading, setLoading] = useState(false);

	return (
		<cepContext.Provider value={{responseCep, setResponseCep}}>
			<loadingContext.Provider value={{loading, setLoading}}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</loadingContext.Provider>
		</cepContext.Provider>
	);
}

export default App;