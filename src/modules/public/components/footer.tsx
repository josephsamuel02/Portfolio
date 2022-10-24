import { useState } from "react";
import { SiMicropython, SiTheregister } from "react-icons/si";
import ContactCard from "./contact_card";
const Footer = () => {
	const [showContactCard, setShowContactCard] = useState<boolean>(false);

	return (
		<div id="footer" className="max-w-full px-2  md:px-10 py-14 flex flex-col md:flex-row bg-indigo-400 ">
			<ul className=" w-auto  md:w-2/6 mx-4 md:mx-auto flex  flex-col px-6">
				<h3 className=" text-lg font-bold py-3 black">Contact</h3>
				<span> Email: mrsamd02@gmail.com</span>
				<span> Phone: +2349056974667</span>

				<h3 className=" text-lg font-bold py-3 black">Links</h3>
				<a href="#home">Home</a>
				<a href="#service">Products</a>
				<a href="#home" onClick={() => setShowContactCard(true)}>
					Contact us
				</a>
			</ul>
			<ul className=" w-auto  md:w-2/6 mx-4 md:mx-auto flex  flex-col px-6">
				<h3 className="text-lg font-bold py-3 text-black">Services</h3>
				<span>website Developrment</span>
				<span>Mobile Application Developrment</span>
				<span>website hosting and Management</span>
				<span>Graphic Design</span>
				<span>UI Design</span>
				<br /> <br /> <br />
				<span className="mx-1 text-base flex flex-row items-center ">
					<SiTheregister /> <span className="mx-1 "> 2022</span>
				</span>
			</ul>

			{/* <ul className=" w-auto md:w-2/6 mx-4 md:mx-auto flex  flex-col  px-6">
				<h3 className=" text-lg font-bold py-3 black">Social Media</h3>
				<a href="#">Facebook Icon</a>
				<a href="#">Instagrm Icon</a>
				<a href="#">Twitter Icon</a>
			</ul> */}

			{showContactCard && <ContactCard setShowContactCard={setShowContactCard} />}
		</div>
	);
};

export default Footer;
