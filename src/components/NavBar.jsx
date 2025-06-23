import "../styles/components/_header.scss";
import CartWidget from "./CartWidget";
import onda_sonar_logo from "/img/logo/onda_sonar_logo.svg";

function NavBar () {

    return (

        <nav className="navbar navbar-expand-xl">
            <div className="container-fluid justify-content-between">

                <a className="navbar-brand logo" href="#">
                <img src={onda_sonar_logo} alt="Logo" />
                </a>

                <div className="d-flex align-items-center gap-3">

                     <CartWidget className="cart-mobile"/>

                    <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                            >
                            <span className="navbar-toggler-icon"></span>
                    </button>

                </div>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Laboratorio</a>
                        </li>   
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Equipo</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item nav-link" href="#">Sobre nosotros</a></li>
                                <li><a className="dropdown-item nav-link" href="#">Sistema de Gestión</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link active" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Contacto</a>
                        </li>
                    </ul>

                    <div className="d-flex justify-content-end gap-3">

                        <CartWidget className="cart-desktop" />
                        <div className="collapse navbar-collapse justify-content-end busqueda" id="navbarSupportedContent">
                            <form className="d-flex justify-content-center" role="search">
                            <input className="form-control me-2 focus-ring" type="search" placeholder="" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </div>

                    </div>
    
                </div>     
            
            </div>
        </nav>

    );

}

export default NavBar;