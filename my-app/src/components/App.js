import React from "react";
import Header from "./Header";
import Home from "./Home";
import Prevent from "./Prevent";
import Symptoms from "./Symptoms";
import Precautions from "./Precautions";
import Doctor from "./Doctor";
import Handwash from "./Handwash";
import Footer from "./Footer";
import Scroll from "./Scroll";

function App() {
	return (
		<div>
			<Header />
			<Home />
			<Scroll />
			<Prevent />
			<Symptoms />
			<Precautions />
			<Doctor />
			<Handwash />
			<Footer />
		</div>
	);
}

export default App;
