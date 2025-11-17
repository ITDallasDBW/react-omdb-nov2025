import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const InputFn = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  function newInput() {
    setInputValue("");
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
    // console.log(inputValue)
  };

  return (
    <>
      {/* <h3>InputFn</h3> */}
      <section className="search">
        <div className="search__wrapper">
        {/* <h4>Enter search term</h4> */}
        <input
          type="text"
          className="search__input"
          id="idBox"
          placeholder="What movie are you looking for?"
          value={inputValue}
          onFocus={() =>setInputValue('')}
          onChange={handleInputChange}
          onKeyDown={(event) => event.key === "Enter" && handleSubmit()}
          autoFocus
        />
        <div className="search__icon" id="idBtn" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      </section>
      {/* <button id="idBtn" onClick={handleSubmit}>
        Submit
      </button> */}
    </>
  );
};

export default InputFn;
