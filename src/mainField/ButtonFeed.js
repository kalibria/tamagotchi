import React from 'react';


const ButtonFeed = ({foodIndicator, setFoodPercent, setAge, age}) => {

    const handleSubmit = () => {
        setFoodPercent(foodIndicator.full);
        setAge(age + 1)
        console.log("buttonFeed", foodIndicator)
    }

    return <button onClick={handleSubmit}>Feed</button>
}

export default ButtonFeed;