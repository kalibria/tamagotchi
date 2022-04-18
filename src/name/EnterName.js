import React, { useState } from "react";
import style from "../App.module.css";

import isValid from "../validates/isValid";
import Error from "../validates/error";

const EnterName = ({ name, setPetName }) => {
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
  };

  const handleChange = (e) => {
    setLetters(e.target.value);
  };

  return (
    <div className={style.enterName}>
      <form onBlur={handleSubmit}>
        <input
          type="text"
          placeholder="Please, enter Latin letters!"
          name="name"
          value={letters}
          onChange={handleChange}
          className={style.inputEnterName}
        />
        <button onClick={handleSubmit}>save</button>
      </form>

      {error && <Error />}
    </div>
  );
};
export default EnterName;
