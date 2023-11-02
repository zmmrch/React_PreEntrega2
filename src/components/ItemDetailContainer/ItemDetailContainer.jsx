import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../../helpers/mFetch";
import { ItemCounter } from "../ItemCounter/ItemCounter";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();

  useEffect(() => {
    mFetch(pid)
      .then((resultado) => setProduct(resultado))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="row" key={product.id}>
      <div className="col-6 mt-5">
        <img src={product.imageUrl} alt="" className="img-fluid" />
      </div>
      <div className="col-6 text-center mt-5">
        <p>Producto: {product.name}</p>
        <p>Categoría: {product.category}</p>
        <p>Precio: ${product.price}</p>
        <ItemCounter initial={1} stock={5} onAdd={0} />
      </div>
    </div>
  );
};
