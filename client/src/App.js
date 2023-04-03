import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Page from "./pages/Page";
import Navbar from "./pages/Navbar";
import Hello from "./pages/Hello";
import Sidebar from "./pages/Sidebar";
import Sign from "./pages/Sign";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/page" element={<Page />} />
		<Route path="/navbar" element={<Navbar />} />
		<Route path="/hi" element={<Hello />} />
		<Route path="/Sidebar" element={<Sidebar />} />
		<Route path="/Sign" element={<Sign />} />
	</Routes>
);

export default App;
