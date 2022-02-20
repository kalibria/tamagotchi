import React from 'react';


const ButtonFeed = ({foodIndicator, setFoodPercent}) => {

    const handleSubmit = () => {
        setFoodPercent(foodIndicator.full);
        console.log("buttonFeed", foodIndicator)
    }

    return <button onClick={handleSubmit}>Feed</button>
}

export default ButtonFeed;