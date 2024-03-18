import React from 'react';

interface RatingProps {
    rating: string;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
    return (
        <div>
            <h2>Rating: {rating}</h2>
        </div>
    );
};

export default Rating;
