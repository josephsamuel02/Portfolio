import { useState } from "react";
import ROUTES from "../public.routes";
import ContactCard from "./contact_card";

const Nav = () => {
	const navigation = [
		{ name: "Services", href: "#footer" },
		{ name: "Contact", href: ROUTES.CONTACT },
		{ name: "About", href: ROUTES.ABOUT },
	];
	const [showNav, setShowNav] = useState<boolean>(false);

	const [showContactCard, setShowContactCard] = useState<boolean>(false);
	return (
		<section className="w-full mx-0 ">
			<nav className="w-full mx-0 z-10 py-0 fixed top-0 backdrop-blur-lg flex flex-row items-center transparent   shadow-md">
				<a href={ROUTES.HOME} className="mx-2 md:mx-6 my-0  items-center">
					<img alt=" Company Logo" className="h-20 w-20 " src="img/planet.png" />
				</a>

				<ul className="mx-8 ml-40 py-3 hidden md:flex flex-row">
					{navigation.map((item, i) =>
						item.name == "Contact" ? (
							<a
								key={i}
								className="mx-1 px-6 tex-center text-slate-400 hover:text-blue-700 text-lg font-bold"
								href={"#"}
								onClick={() => setShowContactCard(true)}
							>
								{item.name}
							</a>
						) : (
							<a
								className="mx-1 px-6 tex-center text-slate-400 hover:text-blue-700 text-lg font-bold"
								href={`${item.href}`}
								key={i}
							>
								{item.name}
							</a>
						)
					)}
				</ul>
				<h1 className="absolute top-7 right-5 cursor-pointer md:hidden transition-all" onClick={() => setShowNav(!showNav)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</h1>

				{showNav && (
					<ul className="mx-8 ml-40 py-3 absolute top-10 right-1 flex flex-col bg-transparent backdrop-blur-2xl rounded  shadow">
						{navigation.map((item, i) =>
							item.name == "Contact" ? (
								<a
									key={i}
									className="mx-0 px-6 py-2 tex-center text-indigo-700 text-lg hover:text-black hover:bg-gradient-to-r from-blue-200 transition-all font-md"
									href={"#"}
									onClick={() => {
										setShowContactCard(true);
										setShowNav(false);
									}}
								>
									{item.name}
								</a>
							) : (
								<a
									className="mx-0 px-6 py-2 tex-center text-indigo-700 text-lg hover:text-black hover:bg-gradient-to-r from-blue-200 transition-all font-md"
									href={`${item.href}`}
									key={i}
									onClick={() => setShowNav(false)}
								>
									{item.name}
								</a>
							)
						)}
					</ul>
				)}
			</nav>

			{showContactCard && <ContactCard setShowContactCard={setShowContactCard} />}
		</section>
	);
};

export default Nav;
``;
