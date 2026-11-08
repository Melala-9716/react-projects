
import { useState } from 'react';

function Index() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const stars = [1, 2, 3, 4, 5];

    const messages = [
        "Poor",
        "Fair",
        "Good",
        "Very Good",
        "Excellent"
    ];

    return (
        <div>
            <h2>Rate Your Experience</h2>

            <div onMouseLeave={() => setHover(0)}>
                {stars.map((star) => (
                    <span
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        style={{
                            color: (hover || rating) >= star
                                ? "orange"
                                : "gray",
                            fontSize: "35px",
                            cursor: "pointer"
                        }}
                    >
                        ★
                    </span>
                ))}
            </div>

            <p>
                {rating > 0
                    ? messages[rating - 1]
                    : "Select a star to rate"}
            </p>

            <p>Your rating: {rating}</p>
        </div>
    );
}

export default Index;

