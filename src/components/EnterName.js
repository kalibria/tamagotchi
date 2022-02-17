import React, {useState} from "react";

import isValid from "../common/isValid";
import Error from "../common/error";


const EnterName = (props) => {
    const [state, setState] = useState(props.name);
    const [editMode, setEditMode] = useState(true);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValid(state)){
            setEditMode(false);
            setError(false)
        }else{
            setError(true)
        }
    }

    const handleChange = (e) => {
        setState(e.target.value);
    }

    return <div>
        {editMode
            ? <form onBlur={handleSubmit}>
                <input type="text" placeholder="Please, enter Latin letters!"  name="name" value={state}
                       onChange={handleChange}/>
                <button onClick={handleSubmit}>save</button>
            </form>
            : <div>
                <div>{state}</div>
                <button onClick={() => {
                    setEditMode(true)
                }}>Edit name
                </button>
            </div>}
        {error && <Error/>}
    </div>
}


export default EnterName;