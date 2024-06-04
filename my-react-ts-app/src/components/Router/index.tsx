import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Error from "../../pages/Error";

export default function RoutesPath() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}
