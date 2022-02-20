import React from "react";


export const AgeIndicator = ({age, maxAge}) => {
    return <div>
        {age <= maxAge
            ? <p>Age: {age} </p>
            : <p>Dead</p>
        }
    </div>
}

