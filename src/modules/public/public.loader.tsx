import { Orbit } from "@uiball/loaders";

const PublicLoader = () => {
	return (
		<div className="h-100 flex items-center justify-center gap-5 bg-green-darker">
			<span className="text-3xl font-bold text-slate-300">Loader</span>
			<Orbit />
		</div>
	);
};
export default PublicLoader;
