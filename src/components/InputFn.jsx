import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const InputFn = ({ error, onSubmit }) => {
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
      <section className="search">
        <div className="search__wrapper">
          <input
            type="text"
            className="search__input"
            id="idBox"
            placeholder="What movie are you looking for?"
            value={inputValue}
            onFocus={() => setInputValue("")}
            onChange={handleInputChange}
            onKeyDown={(event) => event.key === "Enter" && handleSubmit()}
            autoFocus
          />
          <div className="search__icon" id="idBtn" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        {error && (
          <h2 className="errCtr">
            <span className="glow">{error}</span> Try again.
          </h2>
        )}
      </section>
    </>
  );
};

export default InputFn;
