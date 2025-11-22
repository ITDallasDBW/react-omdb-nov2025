import React, { useState } from "react";

const Sorting = ({ moviesToSort, inputValue, onSort }) => {

  const handleSortChange = (e) => {
    const sortMethod = e.target.value;
    let sorted = [...moviesToSort];

    switch (sortMethod) {
      case "A_Z":
        sorted.sort((a, b) => a.Title.localeCompare(b.Title));
        // console.log(sorted);
        break;
      case "Z_A":
        sorted.sort((b, a) => a.Title.localeCompare(b.Title));
        // console.log(sorted);
        break;
      case "H_L":
        sorted.sort((b, a) => a.Year.localeCompare(b.Year));
        // console.log(sorted);
        break;
      case "L_H":
        sorted.sort((a, b) => a.Year.localeCompare(b.Year));
        // console.log(sorted);
        break;
      default:
        sorted = moviesToSort;
      // console.log(sorted);
    }

    onSort(sorted);
    // console.log(sorted);
  };

  return (
    <>
      <div className="results__wrapper">
        <h3 className="results__center">
          Would you like to sort the results for{" "}
          <span className="glow">{inputValue}</span>?
        </h3>
        <div className="select__sort">
          <select id="sort-select" onChange={handleSortChange}>
            <option className="optSize" value="">
              Choose sorting option...
            </option>
            <option value="A_Z">Alpha A</option>
            <option value="Z_A">Alpha Z</option>
            <option value="L_H">Oldest First</option>
            <option value="H_L">Newest First</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Sorting;
