import carrito from "../CartWidget/carrito-de-compras.png";

function CartWidget() {
  return (
    <button type="button" className="btn btn-light position-relative">
      <img src={carrito} alt="" className="imagenCarrito" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
        1+
        <span className="visually-hidden">unread messages</span>
      </span>
    </button>
  );
}

export default CartWidget;
