import Products from "../components/Products";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const {category} = useParams()
  return (
    <>
      <Products category = {category} />
    </>
  )
}

export default ProductsPage;