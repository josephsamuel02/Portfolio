const Features = () => {
	return (
		<div id="features" className=" max-w-full mt-3 py-6 flex flex-row flex-wrap items-center">
			<div className=" mx-auto my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-white rounded-md shadow hover:shadow-lg">
				<img src="img/14.svg" alt="vite" className="m-auto p-4 w-40 h-40" />
				<p className="mx-auto px-10 md:px-1 lg:px-10 text-md text-center font-md text-slate-600">
					Turn your ideas into real life products.
				</p>
			</div>
			<div className=" mx-auto my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-white rounded-md shadow hover:shadow-lg">
				<img src="img/16.svg" alt="vite" className="m-auto p-4 w-40 h-40" />
				<p className="mx-auto px-10 md:px-1 lg:px-10 text-md text-center font-md text-slate-600">
					Mobile and Desktop responsive interfaces that fits well with all screen sizes
				</p>
			</div>
			<div className=" mx-auto my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-white rounded-md shadow hover:shadow-lg">
				<img src="img/11.svg" alt="vite" className="m-auto p-4 w-40 h-40" />
				<p className="mx-auto px-10 md:px-1 lg:px-10 text-md text-center font-md text-slate-600">
					Top-speed delivery of all projects,
				</p>
			</div>
			<div className=" mx-auto my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-white rounded-md shadow hover:shadow-lg">
				<img src="img/15.svg" alt="vite" className="m-auto p-4 w-40 h-40" />
				<p className="mx-auto px-10 md:px-1 lg:px-10 text-md text-center font-md text-slate-600">
					Industry standard design and implementation that meet present trend.{" "}
				</p>
			</div>
		</div>
	);
};

export default Features;
