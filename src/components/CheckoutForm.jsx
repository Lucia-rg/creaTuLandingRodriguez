import { useState } from "react";
import { useCart } from "./CartContext";
import ItemCheckout from "./ItemCheckout";
import "../styles/components/_checkout.scss";
import { formatPriceCOP } from "../utilities/formaterPrice";


function CheckoutForm () {

    const {cart, subTotal} = useCart();
    const envio = 8000;
    const [userData, setUserData] = useState({
        email: "",
        nombre: "",
        apellidos: "",
        cedula: "",
        direccion: "",
        ciudad: "",
        celular: "" ,  
    })
    const validSubmit = () => {
        return (
            userData.email.trim() !== "" &&
            userData.nombre.trim() !== "" &&
            userData.apellidos.trim() !== "" &&
            userData.cedula.trim() !== "" &&
            userData.direccion.trim() !== "" &&
            userData.ciudad.trim() !== "" &&
            userData.celular.trim() !== "" &&
            subTotal !== 0
        );
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", {userData, cart, total: subTotal + envio });
    };

    return (
        <div className="container my-4">
            <div className="row align-content-start justify-content-center">
                <h2 className="text-center">Finalizar Compra</h2>
                <div className="col-lg-6">
                    <h3>Información de contacto</h3>
                    <div>
                        <form className="input-grupo" onSubmit={handleSubmit}>
                            <div className="input-grupo"> 

                                <div className="d-flex flex-row justify-content-between">
                                    <div className="input-item">
                                        <i className="bi bi-person"></i><label>Nombre: </label>
                                        <input
                                        className="input-form"
                                        type="text"
                                        name="nombre"
                                        placeholder="Ej. Lucía"
                                        defaultValue={userData.nombre}
                                        onChange={handleChange}
                                        required /> 
                                    </div>

                                    <div className="input-item">
                                        <i className="bi bi-person"></i><label>Apellidos: </label>
                                        <input
                                        className="input-form"
                                        type="text"
                                        name="apellidos"
                                        placeholder="Ej. Rodríguez Giraldo"
                                        defaultValue={userData.apellidos}
                                        onChange={handleChange}
                                        required /> 
                                    </div>

                                </div>

                                <div className="input-item">
                                    <i className="bi bi-envelope"></i><label>Email: </label>
                                    <input
                                    className="input-form"
                                    type="email"
                                    name="email"
                                    placeholder="Ej. lucia.rodg28@gmail.com"
                                    defaultValue={userData.email}
                                    onChange={handleChange}
                                    required /> 
                                </div>

                                <div className="input-item">
                                    <i className="bi bi-person-vcard"></i><label>Cédula: </label>
                                    <input
                                    className="input-form"
                                    type="text"
                                    name="cedula"
                                    placeholder="Ej. 1000098042"
                                    defaultValue={userData.cedula}
                                    onChange={handleChange}
                                    required /> 
                                </div>

                                <div className="input-item">
                                    <i className="bi bi-phone"></i><label>Celular: </label>
                                    <input
                                    className="input-form"
                                    type="tel"
                                    name="celular"
                                    placeholder="Ej. 3014094201"
                                    defaultValue={userData.celular}
                                    onChange={handleChange}
                                    required /> 
                                </div>
                                
                                <div className="input-item">
                                    <i className="bi bi-geo-alt"></i><label>Ciudad: </label>
                                    <input
                                    className="input-form"
                                    type="text"
                                    name="ciudad"
                                    placeholder="Ej. Medellín"
                                    defaultValue={userData.ciudad}
                                    onChange={handleChange}
                                    required /> 
                                </div>

                                <div className="input-item">
                                    <i className="bi bi-map"></i><label>Dirección: </label>
                                    <input
                                    className="input-form"
                                    type="text"
                                    name="direccion"
                                    placeholder="Ej. Calle 46E #77A - 78"
                                    defaultValue={userData.direccion}
                                    onChange={handleChange}
                                    required /> 
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

                <div className="col-lg-4">
                    <h3 className="mb-2">Resumen del Pedido</h3>
                    <div>
                    {cart.map(product => (
                        <ItemCheckout key={product.id} product={product} /> ))
                        }
                    </div>

                    <div className="total-resumen">
                        <h3>Subtotal: {formatPriceCOP(subTotal.toFixed(2))} COP </h3>
                        <p>Envío : {formatPriceCOP(envio.toFixed(2))} COP </p>
                        <h3 className="total">Total : {formatPriceCOP((subTotal+envio).toFixed(2))} COP </h3>
                    </div>

                <button  disabled={!validSubmit()} className="btn btn-outline-primary btn-pago mt-3" onClick={handleSubmit}>Pagar ahora</button>
                
                </div>
            </div>

        </div>
        
    )

}

export default CheckoutForm;