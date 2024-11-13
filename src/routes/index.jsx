import App from "../App";
import Shopping from "../pages/ShoppingPage";
import ErrorPage from "../pages/ErrorPage";
import NavBar from "../components/NavBar";
import Products from "../pages/ProductsPage";


const routes = [
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <App />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "shopping",
    element: (
      <>
        <NavBar />
        <Shopping />
      </>
    )
  },
  {
    path: "shopping/:category",
    element: (
      <>
        <Products />
      </>
    )
  },
];


export default routes;