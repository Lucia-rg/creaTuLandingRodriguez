// Components
import Item from "./Item";
// Style
import "../styles/components/_itemcard.scss";

function ItemList ({category, products = [], loading = 'true'}) {

  const categories =
    {
      microfonos: 'Micrófonos',
      accesorios: 'Accesorios',
      audifonos: 'Audífonos',
      estudio: 'Estudio y Grabación'
    };


  const filterProducts = category ? products.filter(product => product.category === category.toLowerCase()) : products;

  if (loading) {

    return (
      <div className="col-12 text-center py-5">
        <div>
          <span >Cargando productos...</span>
        </div>
      </div>
    )

  }

  return (

    <div className="row justify-content-center">

      <h1 className="mb-4 text-center"> {category 
          ? `${categories[category]}` 
          : 'Todos los Productos'} </h1>

      <div className="row justify-content-center align-content-start">

        { filterProducts.length > 0 ?

          filterProducts.map(product => (
            <div key={product.id} className="col-11 col-sm-6 col-md-4 item-card">
            <Item product={product} />
            </div>))

         :
         (<div className="col-12 text-center py-5">
          <p className="alert alert-warning">No se encontraron productos</p>
          </div>)
          }

      </div>

    </div>

  );
};

export default ItemList;