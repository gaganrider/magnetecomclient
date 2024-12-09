import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('');
const CheckOut = () => {

const submitHandler=async (e)=>{
e.preventDefault()
axios.post('http://localhost:4000/api/carts/checkout', {
    name: e.target.name.value,
    email: e.target.email.value
  })
  .then(async function (res) {
      const sessionId=res.data.data.sessionId
    const stripe = await stripePromise;
await stripe.redirectToCheckout({ sessionId });
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });
console.log(e.target.name.value)
}


// const { sessionId } = await response.json();

// const stripe = await stripePromise;
// await stripe.redirectToCheckout({ sessionId });




  return (
    <div>
      <form onSubmit={submitHandler} >
        <h2>Enter Your Details</h2>
        <input style={{fontSize:'20px'}} type="text" placeholder='Name' required name='name' /> <br /><br />
        <input style={{fontSize:'20px'}} type="email" placeholder='Email' required name='email' /> <br /><br />
        <button>Proceed To checkout</button>
      </form>
    </div>
  )
}

export default CheckOut













