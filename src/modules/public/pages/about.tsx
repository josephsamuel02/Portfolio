import ContactCard from "../components/contact_card";
import { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const About = () => {
	const [showContactCard, setShowContactCard] = useState<boolean>(false);
	return (
		<div id="about" className=" max-w-full mx-0 my-6 px-3 py-3 items-center">
			<h2 className=" mx-6 py-8 text-4xl text-indigo-600 font-bold">About </h2>

			<div className="mx-auto md:mx-auto px-6 py-12 w-full h-auto flex flex-col md:flex-row rounded border items-center border-slate-300 border-lg">
				<img src="img/planet.png" alt="image" className="m-3 px-0 w-52 h-52 md:w-64 md:h-64 object-cover rounded-full" />

				<div className="mx-auto md:mx-12 px-6 py-12 w-full   flex flex-col   items-center ">
					<p className=" px-6 pt-6 md:py-auto text-center md:text-left text-lg text-slate-700 ">
						I'm a full-stack developer passionate about creativity and idea implementation. Skilled in several programing
						languages and software technologies. Experienced in website design, mobile app developement and bussiness logic
						intergration. I can't wait to meet you, let's bring that idea to reality.
					</p>
					<h1 className="mx-auto my-6 flex flex-row text-center  items-center">
						<a href="https://github.com/josephsamuel02" target="_blank" className="mx-6 py-5">
							<SiGithub size={35} color="black" />
						</a>
						<a href="https://www.linkedin.com/in/joseph-samuel-dev" target="_blank" className="mx-6 py-5">
							<SiLinkedin size={35} color="blue" />
						</a>
					</h1>
				</div>
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
