// import React, { useContext } from 'react';
// import { BasketContext } from '../../contexts/BasketContext';

// export function ShoppingBasket() {
  
//     const { basketItems, setBasketItems, numberОfPurchases, setNumberОfPurchases } = useContext(BasketContext);
  

//   function removeItem(index) {
//     const newItems = [...basketItems];
//     newItems.splice(index, 1);
//     setBasketItems(newItems);
//     setNumberОfPurchases(numberОfPurchases.length)
//   }

//   function calculateTotal() {
//     return basketItems.reduce((total, item) => total + item.price, 0);
//   }

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {basketItems.length === 0 && <p>No items in cart</p>}
//       {basketItems.map((item, index) => (
//         <div key={index}>
//           <p>{item.name} - ${item.price.toFixed(2)}</p>
//           <button onClick={() => removeItem(index)}>Remove</button>
//         </div>
//       ))}
//       {basketItems.length > 0 && (
//         <div>
//           <p>Total: ${calculateTotal().toFixed(2)}</p>
//           <button>Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// }


