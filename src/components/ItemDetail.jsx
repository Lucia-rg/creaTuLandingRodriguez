import { useState } from "react";
import ItemCount from "./ItemCount";
import { formatPriceCOP } from "../utilities/formaterPrice";


function ItemDetail ({product =[] }) {
    
    const [quantity, setQuantity] = useState(1);

    return (
    <div className="container my-5 ">
        <div className="row p-3">
            <div className="col-md-6 mb-4">
                <div className="card border-0">
                    <img 
                        src={product.image}
                        alt={product.name} 
                        className="img-detail"
                    />
                </div>
            </div>

        

            <div className="col-md-6 d-flex flex-column item-info">
                <div className="header-detail">
                    <h1 className="mb-3">{product.name}</h1>
                    <h3 className="text-center mb-3">{formatPriceCOP(product.price)} COP</h3>
                </div>

                <p className="mt-4 mb-4 description-detail">{product.description}</p>

                <div>
                    <p> {product.stock > 0 ? (<> 
                        <i className="bi bi-check-circle-fill text-success fs-4 me-2"></i> Disponible 
                        </>) : (<>
                            <i className="bi bi-x-circle-fill text-danger fs-4 me-2"></i> Agotado</>)} </p>
                    {product.stock > 0 && (<p> {product.stock} unidades en stock</p>)}
                </div>

                {product.stock > 0 ? ( 
                    <div className="row justify-content-center align-content-center">
                    {/* <div className="d-flex gap-3 btn-add-carrito align-items-center"> */}
                    <div className="col mb-4 justify-content-center align-content-center">
                        <ItemCount stock={product.stock} init={1} add={setQuantity} />
                    </div>

                    <div className="col-lg-6 d-flex flex-column justify-content-between gap-2">
                        <button className="btn btn-outline-primary btn-carrito">
                            <i className="bi bi-cart me-2 "></i>
                            Agregar al carrito
                        </button>
                        <button className="btn btn-outline-primary btn-compra">
                            Comprar ahora
                        </button>
                    </div>
                
                    </div>) : (
                    <button className="btn btn-outline-secondary btn-lg mt-2" disabled>
                    Producto agotado
                    </button>
                    )

                    
                }

            </div>


        </div>
    </div>
    )

}

export default ItemDetail;