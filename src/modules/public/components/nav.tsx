import { useState } from "react";
import ROUTES from "../public.routes";
import ContactCard from "./contact_card";

const Nav = () => {
	const navigation = [
		{ name: "Services", href: ROUTES.SERVICE },
		{ name: "Contact", href: ROUTES.CONTACT },
		{ name: "About", href: ROUTES.ABOUT },
	];

	const [showContactCard, setShowContactCard] = useState<boolean>(false);
	return (
		<section className="w-screen ">
			<nav className="w-full z-10 fixed top-0 backdrop-blur-lg flex flex-row py-3 items-center transparent   shadow-md">
				<a href={ROUTES.HOME} className="mx-6 my-3 items-center">
					<img alt=" Company Logo" className="h-8 w-auto sm:h-10" src="/vite.svg" />
				</a>

				<ul className="mx-8 ml-40 py-3 hidden md:flex flex-row">
					{navigation.map((item, i) =>
						item.name == "Contact" ? (
							<a
								key={i}
								className="mx-1 px-6 tex-center text-indigo-600 hover:text-blue-600 text-lg font-md"
								href={"#"}
								onClick={() => setShowContactCard(true)}
							>
								{item.name}
							</a>
						) : (
							<a
								className="mx-1 px-6 tex-center text-indigo-600 hover:text-blue-600 text-lg font-md"
								href={`${item.href}`}
								key={i}
							>
								{item.name}
							</a>
						)
					)}
				</ul>
			</nav>

			{showContactCard && <ContactCard setShowContactCard={setShowContactCard} />}
		</section>
	);
};

export default Nav;
``;
