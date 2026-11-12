
import { useState } from "react";

function Index({ products }) {
    const [visibleProducts, SetVisibleProducts] = useState(10);

    function change() {
        SetVisibleProducts(previous => previous + 10);
    }

    function Reset() {
        SetVisibleProducts(10);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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

            {visibleProducts > 10 && (
                <button onClick={Reset}>
                    Reset
                </button>
            )}

            <h3>
                Showing {Math.min(visibleProducts, products.length)} products
            </h3>
        </div>
    );
}

export default Index;
