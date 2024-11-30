import { MenuItem } from "../types";

type ItemProductProps = {
  item: MenuItem;
  addToOrder: (item: MenuItem) => void;
};

export default function Product({ item, addToOrder }: ItemProductProps) {
  return (
    <button
      type="button"
      className="product-item"
      onClick={() => addToOrder(item)}
    >
      <img src={`${item.img}.jpg`} alt="imagen del producto" />
      <p>{item.name}</p>
      <p>${item.price}</p>
      <div className="product-modal">
        <h2>{item.name}</h2>
      </div>
    </button>
  );
}
