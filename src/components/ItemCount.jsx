import { useState, useEffect } from "react";
import "../styles/components/_itemdetailcontainer.scss";


function ItemCount ({stock, init = 1, add}) {

    const [count, setCount] = useState(init);

    const increment = () => {
        if (count < stock) setCount(count+1);
    };

    const decrement = () => {
        if (count > 1) setCount(count-1);
    };

    useEffect (() => {
        add(count);
    }, [count, add]);

    return (
        <div className="d-flex align-items-center counter-container">

            <button className="btn btn-counter" onClick={decrement} disabled={count <= 1} >
                <i className="bi bi-dash-lg fs-5"></i>
            </button>

            <p className="m-4">{count}</p>

            <button className="btn btn-counter" onClick={increment} disabled={count >= stock}>
                <i className="bi bi-plus-lg fs-5"></i>
            </button>

        </div>

    )

}

export default ItemCount;