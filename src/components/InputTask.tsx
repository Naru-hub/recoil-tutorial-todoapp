import React from "react";
import "./InputTask.css";
import { useRecoilValue } from "recoil";
import { inputTitleState } from "../states/inputTitleState";

const InputTask = () => {
  const inputTitle = useRecoilValue(inputTitleState);

  const handleClick = () => {
    console.log(inputTitle);
  };

  return (
    <div className="inputField">
      <input type="text" className="inputTitle" />
      <button type="button" className="addButton" onClick={handleClick}>
        追加
      </button>
    </div>
  );
};

export default InputTask;
