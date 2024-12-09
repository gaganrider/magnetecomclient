import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const AllProduct = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products/getProducts")
      .then((res) => setProducts(res.data.data));
  }, []);

  
  return (
    <div>
        <span style={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
        <h1>Products</h1>   <button> <Link style={{display:'flex',alignItems:'center'}} to={'/cart'}>Cart <ShoppingCartIcon style={{fontSize:'20px',marginLeft:'5px'}}/></Link>   </button>
        </span>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px'}}>
        {products&&products.map((product) => (
          <Product key={product.id} product={product}  />
        ))}
        </div>
       
      
    </div>
  );
};

export default AllProduct;
