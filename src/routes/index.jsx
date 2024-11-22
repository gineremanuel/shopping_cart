import App from "../App";
import ShoppingPage from "../pages/ShoppingPage";
import ErrorPage from "../pages/ErrorPage";
import NavBar from "../components/NavBar";
import ProductsPage from "../pages/ProductsPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";


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
  // {
  //   path: "cart",
  //   element: (
  //     <>
  //       <NavBar />
  //       <ShoppingCartPage />
  //     </>
  //   )
  // }
];


export default routes;