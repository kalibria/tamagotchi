import React from "react";
import EnterName from "./EnterName";

const PetName = ({ petName, initName, setPetName, setRestartBtn }) => {
  return (
    <div>
      {petName === initName ? (
        <EnterName
          key={"2"}
          name={petName}
          setPetName={setPetName}
          setRestartBtn={setRestartBtn}
        />
      ) : (
        <div>Name: {petName}</div>
      )}
    </div>
  );
};

export default PetName;
