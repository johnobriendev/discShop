import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import countryList from 'react-select-country-list';
import { useCart } from '../contexts/CartContext';


const CheckoutPage = ()=> {

  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');


  const { cartItems, getTotalPrice, getTotalQuantity, updateCartItemQuantity, removeFromCart } = useCart();
  const [shippingOption, setShippingOption] = useState('normal');
  const [totalWithShipping, setTotalWithShipping] = useState(0);

  const FREE_SHIPPING_THRESHOLD = 55;
  const NORMAL_SHIPPING_COST = 5;
  const EXPEDITED_SHIPPING_COST = 10;

  const handleQuantityChange = (item, amount) => {
    if (item.quantity + amount > 0) {
      updateCartItemQuantity(item._id, item.quantity + amount);
    } else {
      removeFromCart(item._id);
    }
  };

  useEffect(() => {
    const subtotal = getTotalPrice();
    let shippingCost = 0;

    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingCost = shippingOption === 'normal' ? 0 : 5;
    } else {
      shippingCost = shippingOption === 'normal' ? NORMAL_SHIPPING_COST : EXPEDITED_SHIPPING_COST;
    }

    setTotalWithShipping(subtotal + shippingCost);
  }, [cartItems, shippingOption, getTotalPrice]);


  return(
    <div className="min-h-screen max-h-full mx-8 pt-12 pb-36 ">
      <form className="flex flex-col md:flex-row gap-10">
        <div className="w-full flex flex-col gap-4">
          <h2>Billing Details</h2>

          <div className="flex flex-col md:flex-row gap-5">
            <div className='flex flex-col'>
              <label htmlFor="firstName">First Name *</label>
              <input className='h-12' type="text" name="firstName" required />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="lastName">Last Name *</label>
              <input className='h-12' type="text" name="lastName" required />
            </div>
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="companyName"> Company Name (optional) </label>
            <input className='h-12' type="text" name="companyName" />
          </div>

          <div>
            <label>Country</label>
          </div>
      

          <div className="flex flex-col">
            <label htmlFor="streetAdd"> Street Address *</label>
            <input type="text" name="streetAdd" required placeholder="House number and street name" className="mb-4 h-12" />
            <input type="text" name="aptNum" placeholder="Apartment, suite, unit, etc. (Optional)" className='h-12' />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city"> Town/City *</label>
            <input className='h-12' type="text" name="city" />
          </div>

          <div>
            <label>State/Region</label>  
          </div>

          <div className="flex flex-col">
            <label htmlFor="city"> Zipcode *</label>
            <input className='h-12' type="text" name="city" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city"> Phone *</label>
            <input className='h-12' type="text" name="city" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city"> Email Address *</label>
            <input className='h-12' type="text" name="city" />
          </div>

          
        </div>
        
        <div className="w-full">
          <h2>Your Order</h2>
          <div className='bg-white h-full flex flex-col'>
            <div className='flex justify-around items-center'>
              <h3 className='p-4'>Product</h3>
              <h3 className='p-4'>Subtotal</h3>
            </div>

            <div className='flex flex-col gap-5 py-5 bg-neutral-100'>
              {cartItems.map(item => (
                <div key={item._id} className='flex justify-around'>
                  <h2 className="text-s">{item.plastic} {item.disc.name} x  {item.quantity} </h2>
                  <h2>${item.price}</h2>
                </div>
              ))}
            </div>

            <div className='flex justify-around items-center p-4'>
              <h3>Subtotal: </h3>
              <p>${getTotalPrice().toFixed(2)}</p>  
            </div>

            <div className='flex justify-around items-center bg-neutral-100 p-4'>
              <p>Shipping</p>
              <div className="mt-4">
                <h3 className="font-bold">Shipping Options:</h3>
                <div>
                  <input 
                    type="radio" 
                    id="normal" 
                    name="shipping" 
                    value="normal" 
                    checked={shippingOption === 'normal'} 
                    onChange={() => setShippingOption('normal')}
                  />
                  <label htmlFor="normal"> Normal Shipping ({getTotalPrice() >= FREE_SHIPPING_THRESHOLD ? 'Free' : `$${NORMAL_SHIPPING_COST}`})</label>
                </div>
                <div>
                  <input 
                    type="radio" 
                    id="expedited" 
                    name="shipping" 
                    value="expedited" 
                    checked={shippingOption === 'expedited'} 
                    onChange={() => setShippingOption('expedited')}
                  />
                  <label htmlFor="expedited"> Expedited Shipping ({getTotalPrice() >= FREE_SHIPPING_THRESHOLD ? '$5' : `$${EXPEDITED_SHIPPING_COST}`})</label>
                </div>
              </div>
            </div>

            <div className='flex justify-around items-center bg-neutral-200 p-4'>
              {getTotalPrice() < FREE_SHIPPING_THRESHOLD && (
              <p className="mt-2 text-sm text-gray-600">
                Add ${(FREE_SHIPPING_THRESHOLD - getTotalPrice()).toFixed(2)} more to your cart for free shipping!
              </p>
              )}
            </div>

            <div className='flex justify-around items-center p-4'>
              <h3>Total</h3>
              <p>${totalWithShipping.toFixed(2)}</p>
            </div>

            <div className='flex justify-center items-center p-4'>
              <button className='bg-purple-300 p-4 rounded text-xl font-bold w-full hover:bg-purple-400' type="submit">Place Order</button>
            </div>


            
            


          </div>
        </div>
        
      </form>
    </div>
  )
}

export default CheckoutPage