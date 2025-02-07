export type MenuItem = {
  id: number;
  img: string;
  name: string;
  price: number;
};

export type OrderItem = MenuItem & {
  quantity: number;
};
