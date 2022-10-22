const Footer = () => {
	return (
		<div id="footer" className="w-full px-2  md:px-10 py-14 flex flex-row bg-indigo-400">
			<ul className="w-2/6 mx-auto flex flex-col px-3">
				<h3 className=" text-lg font-bold py-3 black">Contact</h3>
				<a href=""> Email: officialemail@gmail.com</a>
				<a href=""> Phone: +2349073077717</a>

				<br />
				<h3 className=" text-lg font-bold py-3 black">Links</h3>
				<a href="#">Home</a>
				<a href="#">Products</a>
				<a href="#">Contact us</a>
			</ul>
			<ul className="w-2/6 mx-auto flex flex-col px-3">
				<h3 className="text-lg font-bold py-3 text-black">Services</h3>
				<a href="#">Graphic Design</a>
				<a href="#">Printing</a>
				<a href="#">Web Developrment</a>
				<a href="#">Business Registration</a>
				<a href="#">Business Planning</a>
			</ul>
			<ul className="w-2/6 mx-auto flex flex-col px-3">
				<h3 className=" text-lg font-bold py-3 black">Social Media</h3>
				<a href="#">Facebook Icon</a>
				<a href="#">Instagrm Icon</a>
				<a href="#">Twitter Icon</a>
			</ul>
		</div>
	);
};

export default Footer;
