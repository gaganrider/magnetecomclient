import axios from "axios";


const Product = ({product}) => {



   const addinCart=()=>{
        axios
        .get(`http://localhost:4000/api/products/addtocart/${product._id}`)
        .then((res) => console.log(res) );
    }

  return (
    <div style={{border:'1px solid grey',marginBottom:'20px',borderRadius:'10px', overflow:'hidden',padding:'10px'}}>
      <img style={{width:'200px',height:'200px',objectFit:'cover'}} src={product?.image} alt="" />

      <div>
        <h3>{product?.name}</h3>
        <p>Price: {product?.price}</p>
      <button onClick={addinCart}> + Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
