import React, {useState} from "react";

import isValid from "../common/isValid";
import Error from "../common/error";


const EnterName = ({name, setPetName}) => {
    const [letters, setLetters] = useState(name);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid(letters) && name !== " ") {
            setError(false);
            setPetName(letters);
        } else {
            setError(true);
        }
    }

    const handleChange = (e) => {
        setLetters(e.target.value);
    }

    return <div>

        <form onBlur={handleSubmit}>
            <input type="text" placeholder="Please, enter Latin letters!" name="name" value={letters}
                   onChange={handleChange}/>
            <button onClick={handleSubmit}>save</button>
        </form>

        {error && <Error/>}
    </div>

}
    export default EnterName;