import useGetProducts from "../hooks/useGetProducts";
import ProductCard from "./ProductCard";
import "../styles/ProductCard.css";
import NavBar from "./NavBar";


const Products = ({category}) => {
  const products = useGetProducts(category);
  return (
    <>
      <NavBar />
      <h1 className="category-title">{category}</h1>
      <div className="card-container">
        {products.map(product => (
          <ProductCard
            key = {product.id}
            product= {product}
          />
        ))}
      </div>  
    </>
  )
}

export default Products;