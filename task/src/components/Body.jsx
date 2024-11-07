import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import Error from "./Error";

const Body = () => {
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/home",
			element: <HomePage />,
		},
    {
      path: "/error",
      element: <Error />
    }
	]);
	return <RouterProvider router={appRouter} />;
};

export default Body;
