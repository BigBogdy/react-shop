function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <li className="collection-item ">
      {name}{' '}
      <i
        className="material-icons basket-quntity"
        onClick={() => decQuantity(id)}
      >
        remove
      </i>{' '}
      x{quantity}{' '}
      <i
        className="material-icons basket-quntity"
        onClick={() => incQuantity(id)}
      >
        add
      </i>{' '}
      = {price * quantity} USD
      <span class="secondary-content " onClick={() => removeFromBasket(id)}>
        <i class="material-icons basket-delete">clear</i>
      </span>
    </li>
  );
}

export { BasketItem };
