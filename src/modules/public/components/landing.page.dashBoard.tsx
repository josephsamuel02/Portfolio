import { useState } from "react";
import URLS from "../../../url.links/urls";
import ContactCard from "./contact_card";

const LandingPageDashBoard = () => {
	const [showContactCard, setShowContactCard] = useState<boolean>(false);

	return (
		<div id="home" className=" w-full">
			<div className="w-full h-screen mx-auto mt-12   flex flex-col md:flex-row">
				<div className=" left w-full md:w-3/5 h-screen md:h-auto mx-0 py-0    items-center flex flex-row">
					<div className="mx-auto mt-12 md:mt-auto px-6 py-12 w-full   my-auto">
						<h1 className="p-3 text-black mx-auto md:m-0 font-bold md:text-left text-center text-6xl md:text-6xl ">
							Web Development ?
						</h1>
						<h1 className="p-3 text-indigo-600 m-0  font-bold md:text-left text-center text-5xl md:text-6xl ">I Gat You.</h1>
						<p className="p-3 my-12 text-lg text-gray-500  font-base ">
							For web design, mobile app developmen, website management , web hosting, api integrations and SEO you are in the
							right place.
						</p>

						<a
							href="#"
							className=" mx-6 mt-12 py-3 px-8 bg-indigo-600  transition-all hover:bg-gradient-to-r from-violet-700 rounded-lg text-lg text-white  font-md"
							onClick={() => setShowContactCard(true)}
						>
							Get in Touch
						</a>
					</div>
				</div>
				<div className=" mt-10 md:mt-0 right md:w-2/5  mx-auto h-auto md:mx-0 items-center">
					<img className=" h-full w-full md:w-96 md:h-80 md:mt-24 md:mb-3 mx-1   object-cover" src="img/head image.svg" alt="" />
				</div>

				{showContactCard && <ContactCard setShowContactCard={setShowContactCard} />}
			</div>
		</div>
	);
};

export default LandingPageDashBoard;
