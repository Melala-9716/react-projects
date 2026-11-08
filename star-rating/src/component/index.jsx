
function Index() {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div>
            <h2>Rate Your Experience</h2>

            <div>
                {stars.map((star) => (
                    <span key={star}>★</span>
                ))}
            </div>
        </div>
    );
}

export default Index;
