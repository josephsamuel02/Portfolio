import { useState } from "react";
import ContactCard from "./contact_card";

const Services = () => {
	const [showContactCard, setShowContactCard] = useState<boolean>(false);
	return (
		<div id="service" className=" max-w-full mx-0 mt-34 py-24  bg-transparent ">
			<h1 className=" mx-1 md:mx-12  p-0 md:p-3 text-5xl font-bold text-indigo-600">Services</h1>
			<div className="w-full mx-auto  p-1 md:p-6 flex flex-col md:flex-row">
				<div className=" left mx-0 md:mx-3 w-full md:w-1/2 h-auto items-center  ">
					<div className="box mx-auto my-12 p-0 flex flex-row transition-all bg-white   rounded items-center  hover:shadow-md">
						<img src="img/laptop.png" alt="product1" className="m-0 p-0 w-40 h-40  md:w-52 md:h-52 rounded object-cover" />
						<p className="mx-auto p-8 text-base text-gray-600">E-commerce platform, mobile and desktop responsive.</p>
					</div>
					<div className="box mx-auto my-12 p-0 flex flex-row transition-all bg-white   rounded items-center  hover:shadow-md">
						<p className="mx-auto p-8 text-base text-gray-600">
							Financal Walletet pateform. Built with React(Front end) and Typescript(Back end)
						</p>
						<img src="img/laptop.png" alt="product1" className="m-0 p-0 w-40 h-40  md:w-52 md:h-52 rounded object-cover" />
					</div>
				</div>
				<div className=" right mx-0 md:mx-3  w-full md:w-1/2   h-auto items-center ">
					<div className="box mx-auto my-12 p-0 flex flex-row transition-all bg-white   rounded items-center  hover:shadow-md">
						<img src="img/laptop.png" alt="product1" className="m-0 p-0 w-40 h-40  md:w-52 md:h-52 rounded object-cover" />
						<p className="mx-auto p-8 text-base text-gray-600">Pensionear Validation platform Built with React-Typescript </p>
					</div>
					<div className="box mx-auto my-12 p-0 flex flex-row transition-all bg-white   rounded items-center  hover:shadow-md">
						<p className="mx-auto p-8 text-base text-gray-600">Printing and Pranding Platform</p>
						<img src="img/laptop.png" alt="product1" className="m-0 p-0 w-40 h-40  md:w-52 md:h-52 rounded object-cover" />
					</div>
				</div>
			</div>
			<a
				href="#"
				className="mx-6 my-12 py-3 px-8 bg-violet-700 transition-all hover:bg-gradient-to-r from-blue-600 rounded-md text-lg text-white  font-md"
				onClick={() => setShowContactCard(true)}
			>
				Request Service
			</a>
			{showContactCard && <ContactCard setShowContactCard={setShowContactCard} />}
		</div>
	);
};

export default Services;
