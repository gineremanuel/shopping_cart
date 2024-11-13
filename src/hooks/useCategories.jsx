import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  return categories
};

export default useCategories;
