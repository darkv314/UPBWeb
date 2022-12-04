import { useState, useEffect } from "react";
import api from "../../../api/api";
import ItemCard from "../../../components/itemCard/ItemCard";
import "./store.css";
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import ProductProp from "../../../interfaces/ProductProp";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

export default function Store() {
    const count = useSelector((state: any) => state.counter.count);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await api.get("/products");
                response.data.sort(function (a: any, b: any) {
                    return b.points - a.points;
                });
                setItems(response.data);
            } catch (err: any) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        };
        fetchItems();
    }, []);
    return (
        <div className="tienda">
            <div className="search-box">
            <p>{count}</p>
            <FaShoppingCart />
                <form className="form-search-box">
                    <label htmlFor="search"><FaSearch /></label>
                    <input
                        id="search"
                        type="text"
                        placeholder="Ej: Polera"
                        // value={'Item'}
                        // onChange={}
                    />
                </form>
            </div>

            <div className="store-items">
                {items.map((item: ProductProp) => (
                    <ItemCard 
                    title={item.title}
                    price={item.price}/>
                ))}
            </div>
        </div>
    );
}
