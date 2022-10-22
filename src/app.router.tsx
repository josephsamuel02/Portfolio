import { Route, Routes } from "react-router-dom";
import Nav from "./modules/public/components/nav";
// import About from "./modules/public/pages/about";
// import Contact from "./modules/public/pages/contact";
import LandingPage from "./modules/public/pages/landingPage";
import ROUTES from "./modules/public/public.routes";
const Router = () => {
	return (
		<>
			<Nav />

			<Routes>
				{/* {PublicRouter()} */}

				<Route path={ROUTES.HOME} element={<LandingPage />} />
				{/* <Route path={ROUTES.ABOUT} element={<About />} /> */}
				{/* <Route path={ROUTES.CONTACT} element={<Contact />} /> */}
				<Route path={"*"} element={<h1 className=" mx-auto my-40 items-center text-center text-red-600">NO Page Here</h1>} />
			</Routes>
		</>
	);
};

export default Router;
