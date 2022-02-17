import React from 'react';
import style from './App.module.css';

import EnterName from "./components/EnterName";



const App = ({store: {state: {name}}}) => {
    return <div className={style.mainField}>
        <EnterName name={name}/>
        <div>
            <img className={style.image} alt="tamagotchi"
                 src='https://previews.123rf.com/images/albertzig/albertzig1210/albertzig121001555/15841024-3d-monstre-mignon-de-bande-dessin%C3%A9e.jpg'/>
        </div>
        <div>
            Status indicator
        </div>
        <div>
            Food indicator
        </div>
        <div>
            Age indicator
        </div>
    </div>

}

export default App;