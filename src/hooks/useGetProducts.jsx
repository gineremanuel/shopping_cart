import { useEffect, useState } from "react";

const useGetProducts = (category) => {
  const [ products, setProducts ] = useState([])
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData();
  }, [category]);
  return products
};

export default useGetProducts;