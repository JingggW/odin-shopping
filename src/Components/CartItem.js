import { React, useState, useEffect } from "react";
const CartItem = (props) => {
  const { cartDetail, setCartDetail, cartNum, setCartNum, item } = props;
  const [count, setCount] = useState(item.count);

  const updateCart = (id, count) => {
    const newArray = [...cartDetail];
    const productIndex = cartDetail.findIndex((item) => item.id === id);
    if (count === 0) {
      newArray[productIndex].bought = false;
    } else {
      newArray[productIndex].count = count;
    }
    setCartDetail(newArray);
  };

  useEffect(() => {
    updateCart(item.id, count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
    setCartNum(cartNum + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setCartNum(cartNum - 1);
  };

  const handleRemoval = () => {
    setCartNum(cartNum - count);
    setCount(0);
  }
  return (
    <li className="cartItem" key={item.id}>
      <img src={process.env.PUBLIC_URL + item.src} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>
        <button onClick={handleDecrement}>-</button>
        {item.count}
        <button onClick={handleIncrement}>+</button>
      </p>
      <button onClick={handleRemoval}>Remove</button>
    </li>
  );
};

export default CartItem;