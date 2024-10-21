import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function SkillProgress({ data }) {
  return (
    <div className="w-[13%] max-sm:w-2/5 my-3 mx-8 max-sm:mx-2 flex flex-col justify-center items-center">
      <CircularProgressbar
        value={data.percent}
        maxValue={1}
        text={`${data.percent * 100}%`}
        styles={buildStyles({
          pathColor: "#1f4b91",
          textColor: "#1f4b91",
          trailColor: "#000000f8",
        })}
      />
      <h1 className="text-white my-2 font-bold">{data.skill}</h1>
    </div>
  );
}

export default SkillProgress;
