import { useNavigate } from 'react-router-dom';
import "../styles/components/_nopage.scss";

function NoPage () {
    const navigate = useNavigate();

    return(
        <div className="error-page">
            <div className="animation-container">
                <h1>404</h1>
                <h2>Oops, no encontramos esta página</h2>
                <h3>El link puede estar corrupto</h3>
                <p>o la página fue removida del sitio web</p>

            </div>
            <button className="btn btn-outline-primary btn-nav mt-3" onClick={() => navigate('/')}>
                <i className="bi bi-arrow-left"></i> Regresa a los productos
            </button>
        </div>
    )



}

export default NoPage;