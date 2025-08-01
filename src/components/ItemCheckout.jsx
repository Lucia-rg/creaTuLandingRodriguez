import { formatPriceCOP } from "../utilities/formaterPrice";
import "../styles/components/_checkout.scss";

function ItemCheckout({product}) {

    return (
        <div className="d-flex justify-content-between align-content-center">
            <img src={product.image} alt={product.name} className="img-checkout"/>
            <div className="d-flex flex-column justify-content-start align-content-end">
                <h2 className="card-title title-item-checkout text-end">{product.name}</h2>
                <p className="text-end">{formatPriceCOP(product.price)} COP</p>
            </div>
            
        </div>

    )
 

}

export default ItemCheckout;