import { useCounter } from "../Hooks/useCounter";

export const ItemCounter = ({ initial = 1, stock = 10, onAdd = 0 }) => {
  const { count, handleResta, handleSuma } = useCounter(initial, stock);

  const handleOnAdd = () => {
    onAdd(count);
  };

  return (
    <div className="text-center">
      <div>
        <p>{count}</p>
      </div>
      <div className="btn-group btn-group-lg" role="group">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleSuma}
        >
          {" "}
          +{" "}
        </button>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleResta}
        >
          {" "}
          -{" "}
        </button>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleOnAdd}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
