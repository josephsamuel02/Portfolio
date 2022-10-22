import ContactCard from "../components/contact_card";
import { useState } from "react";

const About = () => {
	const [showContactCard, setShowContactCard] = useState<boolean>(false);
	return (
		<div id="about" className=" max-w-full mx-auto my-6 px-3 py-3 items-center">
			<h2 className=" mx-6 py-8 text-4xl text-indigo-600 font-bold">About </h2>

			<div className="mx-auto px-6 py-12 w-full h-auto flex flex-col md:flex-row rounded border items-center border-slate-300 border-lg">
				<img src="img/laptop.jpg" alt="image" className="m-3 px-0 w-52 h-52 rounded-full" />
				<p className=" px-6 pt-6 md:py-auto text-center md:text-left text-lg text-slate-700 italics">
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
					occaecat fugiat aliqua.Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
					sunt amet fugiat veniam occaecat fugiat aliqua.
				</p>
			</div>

			<h1
				className="mx-auto mt-24 w-52 text-center py-3 px-8 bg-violet-700 transition-all hover:bg-gradient-to-r from-blue-600 rounded-md text-lg text-white  font-md"
				onClick={() => setShowContactCard(true)}
			>
				Request Service
			</h1>
			{showContactCard && <ContactCard setShowContactCard={setShowContactCard} />}
		</div>
	);
};

export default About;
