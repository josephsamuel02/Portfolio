import { Outlet } from "react-router-dom";
import LandingPageDashBoard from "../components/landing.page.dashBoard";
import Features from "../components/features";
import Services from "../components/services";
import Clients from "../components/clients";
import Footer from "../components/footer";
import About from "./about";
import { SiWhatsapp } from "react-icons/si";
const LandingPage = () => {
	return (
		<>
			<LandingPageDashBoard />
			<Services />
			<Features />
			<About />
			<Clients />
			<Footer />

			<a
				href="https://api.whatsapp.com/send?phone=2349056974667"
				target="_blank"
				className="mx-auto px-0  fixed right-6 bottom-12 items-center cursor-pointer rounded-full bg-green-500 "
			>
				<span className=" m-auto">
					<SiWhatsapp size={65} color="white" />
				</span>
			</a>
		</>
	);
};

export default LandingPage;
