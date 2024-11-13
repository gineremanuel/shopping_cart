import { Link, useParams } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import "../styles/Categories.css";

const Categories = () => {
  const categories = useCategories()
  return (
    <div className="categories-container">
      <h2 className="categories-title">Which category do you want to browse ?</h2>
      {categories.length > 0 ? ( <div className="categories-list">
       { categories.map((category, index) => (
          <Link 
            key={index} 
            className="btn-category"
            to={`/shopping/${category}`}
            >
              {category}
          </Link>
        ))}
      </div> 
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Categories;