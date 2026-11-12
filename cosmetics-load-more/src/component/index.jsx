
function Index({ products }) {
    return (
        <div>
            {products.map((product) => (
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
        </div>
    );
}

export default Index;
