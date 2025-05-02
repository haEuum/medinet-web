import React from "react";
import "./style.scss";

type Props = {
  step: number;
};

const ProgressBar: React.FC<Props> = ({ step }) => {
  const progressPercentage = ((step - 1) / 2) * 100;

  return (
    <div className="progressbar-wrapper">
      <div className="progressbar-track">
        <div
          className="progressbar-filled"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
