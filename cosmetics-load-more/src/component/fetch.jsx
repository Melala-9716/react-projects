import { useEffect, useState } from "react";
import Index from "./index.jsx";

function Fetch() {
    const [products, setProducts] = useState([]);

    async function Getproduct() {
        try {
            const response = await fetch(
                "https://dummyjson.com/products?limit=100&skip=0"
            );

            const data = await response.json();
            
            setProducts(data.products);
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    }

    useEffect(() => {
        Getproduct();
    }, []);

    return (
        <div>
            <h1 style={color-blue}>Our Products</h1>
            <Index products={products} />
        </div>
    );
}

export default Fetch;