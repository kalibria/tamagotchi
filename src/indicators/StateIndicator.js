import React, {useState} from "react";

export const StateIndicator = ({stateIndicator, foodPercent}) => {
    // const [state, setState] = useState("fine")
    //
    // if(foodPercent <= 35){
    //     setState("hungry")
    // }else if(foodPercent === 0){
    //     setState("dead")
    // }else{
    //     setState("fine")
    // }

    return <div>
        {foodPercent <= 35
            ?  <p>State: {stateIndicator.hungry.uiText} </p>
            ? foodPercent === 0
                :  <p>State: {stateIndicator.dead.uiText} </p>
            : <p>State: {stateIndicator.fine.uiText} </p>

        }
        <p>State: {stateIndicator.hungry.uiText} </p>

    </div>
}

