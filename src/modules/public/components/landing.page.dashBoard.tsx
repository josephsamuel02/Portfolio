import { useState } from "react";
import ContactCard from "./contact_card";

const LandingPageDashBoard = () => {
	const [showContactCard, setShowContactCard] = useState<boolean>(false);

	return (
		<div className="container w-screen">
			<div className="w-screen  h-screen mx-auto mt-12   flex flex-col md:flex-row">
				<div className=" left w-full md:w-3/5 h-screen md:h-auto mx-0 py-0    items-center flex flex-row">
					<div className="mx-auto mt-12 md:mt-auto px-6 py-12 w-full   my-auto">
						<h1 className="p-3 text-black m-0 font-bold md:text-left text-center text-4xl md:text-6xl ">Web Developement?</h1>
						<h1 className="p-3 text-indigo-600 m-0  font-bold md:text-left text-center text-5xl md:text-6xl"> I Gat You.</h1>
						<p className="p-3 my-12 text-lg text-gray-500  font-base ">
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
							veniam occaecat fugiat aliqua.
						</p>

						<a
							href="#"
							className="mx-6 mt-12 py-3 px-8 bg-violet-700  transition-all hover:bg-gradient-to-r from-blue-600 rounded-lg text-lg text-white  font-md"
							onClick={() => setShowContactCard(true)}
						>
							Get in Touch
						</a>
					</div>

					<svg
						className="hidden md:flex inset-y-0 right-0 h-full w-24 translate-x-1/2 transform text-white lg:block"
						fill="currentColor"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="50,0 100,0 50,100 0,100" className=" bg-red-400 " />
					</svg>
				</div>
				<div className=" mt-10 md:mt-0 right md:w-2/5  mx-auto h-auto md:mx-0">
					<img
						className="h-95 w-full  object-cover md:h-full"
						src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
						alt=""
					/>
				</div>

				{showContactCard && <ContactCard setShowContactCard={setShowContactCard} />}
			</div>
		</div>
	);
};

export default LandingPageDashBoard;
