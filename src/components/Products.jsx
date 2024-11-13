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
            title={product.title}
            description={product.description}
            img={product.image}
            rating= {product.rating}
            price= {product.price} 
          />
        ))}
      </div>  
    </>
      
  )
}

export default Products;