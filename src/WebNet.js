import React from 'react';

const WebNet = () => {
    // Define an array of positions for each star
    const starData = [
        { top: '20px', left: '50px', width: '420px', height: '420px' },
        { bottom: '20px', right: '50px', width: '256px', height: '256px' },
    ];

    const drawStar = ({ top, left, bottom, right, width, height }) => {
        return (
            <div className="stars-container" style={{ top, left, bottom, right }}>
                <img src="blur_star.svg" alt="Star" 
                    style={{ width, height }}
                />
            </div>
        );
    };

    return (
        <div>
            {starData.map((star, index) => drawStar(star, index))}
        </div>
    );
};

export default WebNet;