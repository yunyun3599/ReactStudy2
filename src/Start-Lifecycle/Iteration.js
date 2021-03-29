import React from 'react';

const Iteration = () => {
    const seasons = ['봄', '여름', '가을',' 겨울'];
    const seasonList = seasons.map((season, index) => <li key = {index}>{season}</li>);
    return(
        <ul>{seasonList}</ul>       
    );
};

export default Iteration;