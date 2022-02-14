import React, {useState} from "react";


const EnterName = (props) => {
    const [state, setState] = useState(props.name);
    const [editMode, setEditMode] = useState(true);

    const handleSubmit = (e) => {
        setState(e.target.value);
        setEditMode(false)
    }

    const handleChange = (e) => {
        setState(e.target.value);
    }

    return <div>
        {editMode
        ?  <form onDoubleClick={handleSubmit}>
                <input type="text" placeholder="Please, enter name!" name="name" value={state}
                       onChange={handleChange}/>
            </form>
        : <div>
                <div>{state}</div>
                <button onClick={() => {setEditMode(true)}}>Edit name</button>
        </div>}


    </div>
}



export default EnterName;