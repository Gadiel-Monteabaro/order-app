import type { MenuItem, OrderItem } from "../types";

type OrderItemProps = {
  product: OrderItem;
  productTotal: (price: number, quantity: number) => number;
  removeFromOrder: (id: MenuItem["id"]) => void;
  increaseQuantity: (id: MenuItem["id"]) => void;
  decreaseQuantity: (id: MenuItem["id"]) => void;
};

export default function OrderItem({
  product,
  productTotal,
  removeFromOrder,
  increaseQuantity,
  decreaseQuantity,
}: OrderItemProps) {
  return (
    <div className="card-item">
      <div className="card-text">
        <p>{product.name}</p>
        <p>
          ${productTotal(product.price, product.quantity)}{" "}
          <span className="item-quantity">x{product.quantity}</span>
        </p>
      </div>
      <div className="card-buttons">
        <button
          type="button"
          onClick={() => increaseQuantity(product.id)}
          className="item-icon increment"
        >
          <i className="ri-add-line"></i>
        </button>
        <button
          type="button"
          onClick={() => decreaseQuantity(product.id)}
          className="item-icon decrement"
        >
          <i className="ri-subtract-fill"></i>
        </button>
        <button
          type="button"
          onClick={() => removeFromOrder(product.id)}
          className="item-icon delete"
        >
          <i className="ri-delete-bin-line"></i>
        </button>
      </div>
    </div>
  );
}
