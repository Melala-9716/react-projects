
import { useEffect, useState } from "react";
import Index from "./index.jsx";

function Fetch() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function Getproduct() {
        try {
            const response = await fetch(
                "https://dummyjson.com/products?limit=100&skip=0"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();

            console.log("API response:", data);

            setProducts(data.products);

        } catch (error) {
            console.log("Error fetching products:", error);
            setError(error.message);

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        Getproduct();
    }, []);

    if (loading) {
        return <h2>Loading products...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div>
            <h1 style={{ color: "blue" }}>Our Products</h1>
            <Index products={products} />
        </div>
    );
}

export default Fetch;
