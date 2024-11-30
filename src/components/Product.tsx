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
    </button>
  );
}
