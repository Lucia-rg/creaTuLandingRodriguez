import {NavLink} from "react-router-dom";
import "../styles/components/_header.scss";
import CartWidget from "./CartWidget";
import onda_sonar_logo from "/img/logo/onda_sonar_logo.svg";

function NavBar () {

    return (

        <nav className="navbar navbar-expand-xl">
            <div className="container-fluid justify-content-between">

                <NavLink to="*" className="navbar-brand logo">
                <img src={onda_sonar_logo} alt="Logo" />
                </NavLink>

                <div className="d-flex align-items-center gap-3">

                    <CartWidget className="cart-mobile"/>

                    <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" 
                            data-bs-dismiss="navbarCollapse" 
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
                            <NavLink to="*" className="nav-link">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="*" className="nav-link" >Servicios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="*" className="nav-link" >Laboratorio</NavLink>
                        </li>   
                        <li className="nav-item dropdown">
                            <NavLink to="*" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"  role="button" aria-expanded="false">Equipo</NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink to="*" className="dropdown-item nav-link" >Sobre nosotros</NavLink></li>
                                <li><NavLink to="*" className="dropdown-item nav-link" >Sistema de Gestión</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" role="button" aria-expanded="false">Productos</NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/productos/microfonos" className="dropdown-item nav-link" data-bs-dismiss="navbarCollapse"  >Micrófonos</NavLink></li>
                                <li><NavLink to="/productos/accesorios" className="dropdown-item nav-link" >Accesorios</NavLink></li>
                                <li><NavLink to="/productos/audifonos" className="dropdown-item nav-link" >Audífonos</NavLink></li>
                                <li><NavLink to="/productos/estudio" className="dropdown-item nav-link" >Estudio y grabación</NavLink></li>
                                <li><NavLink to="/" className="dropdown-item nav-link" >Ver todo</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="*" className="nav-link" >Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="*" className="nav-link" aria-current="page" >Contacto</NavLink>
                        </li>
                    </ul>

                    <div className="d-flex justify-content-end gap-3">

                        <CartWidget className="cart-desktop" />
                        <div className="collapse navbar-collapse justify-content-end busqueda" id="navbarSupportedContent">
                            <form className="d-flex justify-content-center" role="search">
                            <input className="form-control me-2 focus-ring" type="search" placeholder="" aria-label="Search" />
                            <button className="btn btn-outline-success btn-search" type="submit">Buscar</button>
                            </form>
                        </div>

                    </div>
    
                </div>     
            
            </div>
        </nav>

    );

}

export default NavBar;