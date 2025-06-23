function Item( {product}) {

    return (

        <div className="card shadow-sm">
          <img 
            src={product.image}
            alt={product.name} 
            className="p-3"
          />
          <div className="card-body">
            <h5>{product.name}</h5>
            <p>${product.price}</p>
            <button className="btn btn-outline-primary">Agregar al carrito</button>
          </div>
      </div>

    );

};

export default Item;
