
import { useState } from "react";

function Index({ products }) {
    const [visibleProducts, SetVisibleProducts] = useState(10);

    function change() {
        SetVisibleProducts(previous => previous + 10);
    }

    return (
        <div>
            {products.slice(0, visibleProducts).map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        width="150"
                    />

                    <p>${product.price}</p>
                </div>
            ))}

            {visibleProducts < products.length && (
                <button onClick={change}>
                    Show More
                </button>
            )}
        </div>
    );
}

export default Index;
