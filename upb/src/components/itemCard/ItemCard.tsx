import { useState, useEffect } from "react";
import ProductProp from "../../interfaces/ProductProp";
import "./item.css";
import {
    increment,
    decrement,
} from "../../Pages/Tienda/features/counter/counterSlice";
import { useDispatch } from "react-redux";

export default function ItemCard(props: ProductProp) {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    return (
        <div className="item-card">
            <img src={`/products/${props.title}.jpg`} />
            <div className="item-content">
                <h3>{props.title}</h3>
                <p>{props.price}</p>
            </div>
            <div className="item-buttons">
                <button
                    className="count-button"
                    onClick={() => {
                        dispatch(decrement());
                        if (count > 0)
                        setCount(count - 1);
                    }}
                >
                    -
                </button>
                <p>{count}</p>
                <button
                    className="count-button"
                    onClick={() => {
                        dispatch(increment());
                        setCount(count + 1);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
}
