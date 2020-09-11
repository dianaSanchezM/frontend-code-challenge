import React, { useState, useEffect } from "react";
import { fetchData } from "../const";

const SearchInput = ({ list, setList, value, setValue }) => {
  

  function filter(res) {
    //(res.length == )
    const newList = res.filter((element) => {
      const typeList = element.Types.filter((type) => type.includes(value));

      return element.Name.includes(value) || (typeList.length!==0);
    });

    return newList.slice(0,4);
  }

  useEffect(() => {
    fetchData().then((res) => {
      setList(filter(res));
    });
  }, [setList, value]);

  return (
    <>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Pokemon or type"
      />
      <div className="loader"></div>
    </>
  );
};

export default SearchInput;
