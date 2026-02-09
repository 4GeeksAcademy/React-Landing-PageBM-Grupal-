import React from "react";


import Cards from "./Cards";
import Jumbotron from "./Jumbotron";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./Footer";
import NavBar from "./NavBar";

//create your first component
const Home = () => {
	return (
		<>
		<NavBar/>
		<Jumbotron/>
		<Cards/>
		<Footer/>

		</>
		
		
	);
};

export default Home;