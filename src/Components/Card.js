import "../App.css";

const Card = (props) => {
  const { toy_src, toy_id, toy_name, toy_price, setCartNum, cartNum } = props;
  const addToCart = () => {
    setCartNum(cartNum + 1);
    console.log("add to cart");
  };

  return (
    <div className="product-display">
      <img
        key={toy_id}
        src={process.env.PUBLIC_URL + toy_src}
        alt="A plush toy"
      />
      <p className="toy-name">{toy_name}</p>
      <p className="toy-price">{"$" + toy_price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Card;
