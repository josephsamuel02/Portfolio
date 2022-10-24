import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { BsTelephone } from "react-icons/bs";
import URLS from "../../../url.links/urls";

const ContactCard = ({ setShowContactCard }: { setShowContactCard: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<div className="w-full fixed top-0 bottom-0 mx-auto flex transition-all flex-col bg-transparent z-20 items-center  ">
			<div className="mx-auto px-5 mt-24 pt-3 pb-10 h-auto w-auto bg-transparent backdrop-blur-lg   transition-all rounded shadow-lg items-center">
				<h1
					className=" mx-0 p-0 cursor-pointer text-gray-500 text-right text-2xl font-bold float-right "
					onClick={() => setShowContactCard(false)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						className="w-6 h-6 "
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</h1>

				<h2 className="text-indigo-600 py-1 text-3xl font-bold border-b-2 border-gray-200">Contact</h2>
				<a
					href={URLS.EMAIL}
					target="_blank"
					className="mx-auto px-0 py-4 flex flex-row my-6 rounded items-center hover:shadow-lg"
				>
					<span className=" mx-3">
						<SiGmail size={35} color="#e60000" />
					</span>
					<span className="px-6 text-xl   text-gray-800">mrsamd02@gmail.com</span>
				</a>

				<a
					href={URLS.WHATSAPP}
					target="_blank"
					className="mx-auto px-0 py-4 flex flex-row my-6 rounded items-center hover:shadow-lg"
				>
					<span className=" mx-2 p-0 rounded-full bg-green-500">
						<SiWhatsapp size={35} color="white" />
					</span>
					<span className="px-6 text-xl   text-gray-800"> +2349056974667</span>
				</a>

				<a
					href={URLS.LINKEDIN}
					target="_blank"
					className="mx-auto px-0 py-4 flex flex-row my-6 rounded items-center hover:shadow-lg"
				>
					<span className=" mx-3">
						<SiLinkedin size={35} color="#3300cc" />
					</span>
					<span className="px-6 text-xl   text-gray-800">in/joseph-samuel-dev</span>
				</a>

				<a href={URLS.CALL} className="mx-auto px-0 py-4 flex flex-row my-6 rounded items-center hover:shadow-lg">
					<span className=" mx-3">
						<BsTelephone size={35} color="#0055ff" />
					</span>
					<span className="px-6 text-xl text-center text-gray-800">+2349073077717</span>
				</a>
			</div>
		</div>
	);
};

export default ContactCard;
