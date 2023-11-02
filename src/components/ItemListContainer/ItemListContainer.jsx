import { useEffect, useState } from "react";
import { mFetch } from "../../helpers/mFetch";
import { Link, useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //Uso el cid (category id para poder filtar los rdos por categoria de producto)
  const { cid } = useParams();

  useEffect(() => {
    if (cid) {
      mFetch() //llamada a las apis ->
        .then((resultado) =>
          setProducts(resultado.filter((product) => product.category === cid))
        )
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      mFetch() //llamada a las apis ->
        .then((resultado) => setProducts(resultado))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [cid]); //coloco cid dentro para que se refresque en cada cambio de cid

  return (
    <>
      {loading ? (
        <img src="../../public/loader.gif" id="loading"></img>
      ) : (
        products.map((product) => (
          <div className="card w-25" key={product.id}>
            <img src={product.imageUrl} className="card-img-top" />
            <div className="card-body">
              <p>Producto: {product.name}</p>
              <p>Categoria: {product.category}</p>
              {/* <p>Precio: {product.price}</p> */}
            </div>
            <div className="card-footer">
              <Link to={`/detail/${product.id}`}>
                <button className="btn btn-outline-dark w-100">Detalle</button>
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default ItemListContainer;
