import OrderItem from "./components/OrderItem";
import Product from "./components/Product";
import { MenuItem } from "./types";
import { useApp } from "./hooks/useApp";

function App() {
  const {
    data,
    order,
    addToOrder,
    productTotal,
    removeFromOrder,
    increaseQuantity,
    decreaseQuantity,
    clearOrder,
    isEmpty,
    orderTotal,
  } = useApp();

  return (
    <div className="container">
      <div className="cards">
        <div className="card first-card">
          <section>
            <h2 className="card-title">Productos</h2>
            {data.map((item: MenuItem) => (
              <Product key={item.id} item={item} addToOrder={addToOrder} />
            ))}
          </section>
          <div className="card-info">
            <p className="first-p-footer">
              &copy; {new Date().getFullYear()} Gadiel Monteabaro
            </p>
            <a
              href="https://github.com/Gadiel-Monteabaro/order-app"
              className="link-git"
              target="_blank"
            >
              <i className="ri-github-fill">GitHub</i>
            </a>
          </div>
        </div>
        <div className="card second-card">
          <section className={`order ${isEmpty ? "empty" : "not-empty"}`}>
            {isEmpty ? (
              <h2 className={`card-title ${isEmpty ? "title-empty" : ""}`}>
                No hay ordenes
              </h2>
            ) : (
              <div className={`order ${isEmpty ? "empty" : "not-empty"}`}>
                <h2 className="card-title">Orden</h2>
                {order.map((product) => (
                  <OrderItem
                    key={product.id}
                    product={product}
                    productTotal={productTotal}
                    removeFromOrder={removeFromOrder}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                  />
                ))}
              </div>
            )}
          </section>
          <div className="card-info">
            {isEmpty ? (
              ""
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => clearOrder()}
                  className="btn"
                >
                  Eliminar Orden
                </button>
                <div className="total">
                  <h3>Total: ${orderTotal}</h3>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
