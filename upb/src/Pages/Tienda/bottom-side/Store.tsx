import { useState, useEffect } from "react";
import api from "../../../api/api";
import ItemCard from "../../../components/itemCard/ItemCard";
import "./store.css";
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import ProductProp from "../../../interfaces/ProductProp";
import { useSelector } from "react-redux";
export default function Store() {
    const count = useSelector((state: any) => state.counter.count);
    const [data, setData] = useState([])
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('')
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await api.get("/products.json");
                response.data.sort(function (a: any, b: any) {
                    return b.points - a.points;
                });
                setData(response.data)
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
    useEffect(() => {
        // console.log(value)
        setItems(data.filter((item: any) => item.title.includes(value)))
    }, [value])
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
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
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
