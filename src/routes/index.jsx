import App from "../App";
import ShoppingPage from "../pages/ShoppingPage";
import ErrorPage from "../pages/ErrorPage";
import NavBar from "../components/NavBar";
import ProductsPage from "../pages/ProductsPage";


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
        <ShoppingPage />
      </>
    )
  },
  {
    path: "shopping/:category",
    element: (
      <>
        <ProductsPage />
      </>
    )
  },
];


export default routes;