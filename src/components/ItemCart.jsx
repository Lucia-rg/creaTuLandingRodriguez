import { formatPriceCOP } from "../utilities/formaterPrice";
import "../styles/components/_cart.scss";
import "../styles/components/_itemdetailcontainer.scss";

function ItemCart ({product, onRemoveFromCart, onUpdateQuantity}){

    const handleRemove = () => {
        onRemoveFromCart(product.id);
    };

    const handleIncrease = () => {
        if (product.quantity < product.stock) {
            onUpdateQuantity(product.id, product.quantity+1);
        }  
    };

    const handleDecrease = () => {
        if (product.quantity > 1) {
            onUpdateQuantity(product.id, product.quantity-1);
        } else {
            onRemoveFromCart(product.id);
        }
    }


    return (

        <div className="row g-0">
            <div className="col-md-4">
                <img 
                    src={product.image}
                    alt={product.name} 
                    className="img-fluid img-cart p-3"
                />
            </div>

            <div className="col-md-8 position-relative">
                <button className="position-absolute top-0 end-0 m-2 btn btn-sm btn-delete-cart" onClick={handleRemove} >
                    <i className="bi bi-x-lg"></i>
                </button>

                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{formatPriceCOP(product.price)} COP</p>

                    <div className="d-flex align-items-center mt-2">

                        <button className="btn btn-counter" onClick={handleDecrease}>
                            {product.quantity === 1 ?  <i className="bi bi-trash fs-5"></i> : <i className="bi bi-dash-lg fs-5"></i>}  
                        </button>

                        <p className="m-4">{product.quantity}</p>

                        <button className="btn btn-counter" onClick={handleIncrease} disabled={product.quantity >= product.stock}>
                            <i className="bi bi-plus-lg fs-5"></i>
                        </button>

                    </div>
                  
                </div>

            </div>

        </div>

    )

}

export default ItemCart;