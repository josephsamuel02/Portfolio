import { Outlet } from "react-router-dom";
import LandingPageDashBoard from "../components/landing.page.dashBoard";
import Features from "../components/features";
import Services from "../components/services";
import Clients from "../components/clients";
import Footer from "../components/footer";
import About from "./about";
const LandingPage = () => {
	return (
		<>
			<LandingPageDashBoard />
			<Services />
			<Features />
			<About />
			<Clients />
			<Footer />
		</>
	);
};

export default LandingPage;
