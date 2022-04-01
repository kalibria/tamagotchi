import React, { useState } from "react";

export const Modal = ({
  petName,
  age,
  maxAge,
  state,
  showModal,
  setShowModal,
}) => {
  const config = {
    title: "Sorry your pet died!",
    text: {
      naturalDeath: `Your pet has lived a long great life… Rest in peace, ${petName}!`,
      sicknessDeath: `${petName} died due to illness`,
      hungryDeath: `${petName} died due to starvation`,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setShowModal("none");
  };
  console.log("age", age);

  return (
    <>
      <div>
        {/*style={{ display: showModal }}>*/}
        <div>
          <p>{config.title}</p>
          {age > maxAge ? <p>{config.text.naturalDeath}</p> : null}
        </div>
        <button onClick={handleSubmit}>close</button>
      </div>
    </>
  );
};
