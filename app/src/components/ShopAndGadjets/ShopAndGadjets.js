import { useContext, useState } from "react";
import { BasketContext } from "../../contexts/BasketContext";

import styles from './ShopAndGadjets.module.css';
import { Link } from 'react-router-dom';

export function ShopAndGadjets() {
  const [isClick, setIsClick] = useState(false);
  const { items,  basketItems, setBasketItems, numberОfPurchases, setNumberОfPurchases } = useContext(BasketContext);

//   function addItem(basketItem) {
//     setBasketItems(basketItems => [...basketItems, basketItem]);
//     setNumberОfPurchases(Number(numberОfPurchases) + 1);
//   }
function addItem(item) {
   
    const existingItemIndex = basketItems.findIndex(
      (basketItem) => {
          if (basketItem._id === item._id && basketItem.quantity > 0) {
              return true;
          }
          return false;
      });

    if (existingItemIndex >= 0) {
      const updatedBasketItems = [...basketItems];
      updatedBasketItems[existingItemIndex].quantity += 1;
      updatedBasketItems[existingItemIndex].price += item.price;
    } else {
      setBasketItems((basketItems) => [
        ...basketItems,
        { ...item, quantity: 1 },
      ]);
    }
    setNumberОfPurchases(Number(numberОfPurchases) + 1);
  }
  
  const click = () => {
    setIsClick(!isClick);
  };

  function removeItem(id, index) {

    const newItems = [...basketItems];
    const currentItem = newItems.find((item) => item._id === id);

    if (currentItem.quantity > 1) {
        const subtraction = currentItem.price / currentItem.quantity;
        currentItem.price -= subtraction;
        currentItem.quantity -= 1;

        newItems.map((i) => {
            if (i._id === id) {
                console.log(i._id);
                console.log(id);
                return i = currentItem;
            }
            return i;
        })
       
        setBasketItems(newItems)
        setNumberОfPurchases(Number(numberОfPurchases) - 1)
    } else {
        newItems.splice(index, 1);
        
        setBasketItems(newItems);
        setNumberОfPurchases(Number(numberОfPurchases) - 1)
    }
  }

  function calculateTotal() {
    return basketItems.reduce((total, item) => total + item.price, 0);
  }

  return (
    <section className={styles["recipes"]}>

      {isClick && <div className={styles["shoppingCart"]}>
      <h2>Shopping Cart</h2>
      {basketItems.length === 0 && <p>No items in cart</p>}
      {basketItems.map((item, index) => (
        <div className={styles["lineItemContainer"]} key={item._id}>
            <article className={styles["article"]}> 
                <div className={styles["article__imgContainer"]}>
                <img
                    src={item.imageUrl}
                    alt=""
                    className={styles["article__imgContainer__img"]}/>
                </div>
                <div className={styles["containerContent"]}>
                <span className={styles["content"]}>{item.name}</span>
                <span className={styles["content"]}>{item.quantity}</span>
                <span className={styles["content"]}>${item.price.toFixed(2)}</span>
                </div>
            </article>
          <button className="btn" onClick={() => removeItem(item._id, index)}>Remove</button>
          <br/>
          <hr/>
        </div>
      ))}
      {basketItems.length > 0 && (
        <div className={styles['containerTotalCheckout']}>
          <p className={styles['total']}>Total: ${calculateTotal().toFixed(2)}</p>
          <button className="btn" >Checkout</button>
        </div>
      )}
    </div> }

    <div className={styles["toolsContainer"]}>

      <form id={styles["search"]}>
        <div className={styles["searchContainer"]}>
          <label htmlFor="leg-title">Tools&Gadgets</label>
          <Link to={`/createShopGadjet`} className="link">
            <button className="btn">CreateNewGadjet</button>
          </Link>
          <button className={styles["btn"]} type="button" onClick={click} >
            <i className="fas fa-shopping-cart"></i>
          </button>
          <p className={styles["numOfPurch"]}>{numberОfPurchases}</p>
        </div>
      </form>

      <div className={styles["recipeContainer"]}>

        {items.map((i) => (
          <div key={i._id} className={styles["card"]}>
            <div className={styles["card__imgContainer"]}>
              <img
                src={i.imageUrl}
                alt=""
                className={styles["card__imgContainer__img"]}
              />
            </div>
            <div className={styles["card__content"]}>
              <h2 className={styles["card__content__title"]}>{i.name}</h2>
              <p>Price: {i.price}</p>
              <button className="btn" onClick={() => addItem(i)}>
                AddToBasket
              </button>
            </div>
          </div>
        ))}
        
        {items.length === 0 && (
          <h3 className={styles["nostyles[-articles"]}>No articles yet</h3>
        )}
      </div>
      </div>
    </section>
  );
}


