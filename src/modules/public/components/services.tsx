import { useState } from "react";
import URLS from "../../../url.links/urls";
import ContactCard from "./contact_card";

const Services = () => {
	const [showContactCard, setShowContactCard] = useState<boolean>(false);
	return (
		<div id="service" className=" w-full mx-0 px-0 sm:mt-34 md:mt-0 lg:mt-34 py-24  bg-transparent ">
			<h1 className=" mt-48 mx-6 md:mt-3  md:mx-3 p-0 md:p-3 text-4xl md:text-5xl font-bold text-indigo-600">Some Services</h1>
			<div className=" md:w-full mx-3 md:mx-auto p-1 md:p-6 flex flex-col md:flex-row">
				<div className=" left mx-0 md:mx-3 w-full md:w-1/2 h-auto items-center">
					<div className="box mx-0 md:mx-auto my-12 p-0 flex flex-row rounded items-center  ">
						<img src={URLS.HEADIMAGE} alt="product1" className="m-3 p-0 w-36 h-auto  md:w-52 md:h-auto rounded object-cover" />
						<p className="mx-auto py-auto p-3 md:p-8 text-base  text-gray-600">
							E-commerce platform, mobile and desktop responsive.
						</p>
					</div>
					<div className="box mx-0 md:mx-auto my-12 p-0 flex flex-row rounded items-center  ">
						<p className="mx-auto py-auto p-3 md:p-8 text-base  text-gray-600">
							E-commerce platform, mobile and desktop responsive.
						</p>
						<img src={URLS.HEADIMAGE} alt="product1" className="m-3 p-0 w-36 h-auto  md:w-52 md:h-auto rounded object-cover" />
					</div>
				</div>
				<div className=" right mx-auto md:mx-3  w-full md:w-1/2   h-auto items-center ">
					<div className="box mx-0 md:mx-auto my-12 p-0 flex flex-row rounded items-center  ">
						<img src={URLS.HEADIMAGE} alt="product1" className="m-3 p-0 w-36 h-auto  md:w-52 md:h-auto rounded object-cover" />
						<p className="mx-auto py-auto p-3 md:p-8 text-base  text-gray-600">
							E-commerce platform, mobile and desktop responsive.
						</p>
					</div>
					<div className="box mx-0 md:mx-auto my-12 p-0 flex flex-row rounded items-center  ">
						<p className="mx-auto py-auto p-3 md:p-8 text-base  text-gray-600">
							E-commerce platform, mobile and desktop responsive.
						</p>
						<img src={URLS.HEADIMAGE} alt="product1" className="m-3 p-0 w-36 h-auto  md:w-52 md:h-auto rounded object-cover" />
					</div>
				</div>
			</div>
			<a
				href="#"
				className="mx-6 my-12 py-3 px-8 bg-violet-700 transition-all hover:bg-gradient-to-r from-blue-600 rounded-md text-lg text-white  font-md"
				onClick={() => setShowContactCard(true)}
			>
				Request For Service
			</a>
			{showContactCard && <ContactCard setShowContactCard={setShowContactCard} />}
		</div>
	);
};

export default Services;
