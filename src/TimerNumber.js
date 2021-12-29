import React from "react";

export default function TimerNumber(props) {
  return (
    <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg font-mono leading-none">
      {("0" + props.number).slice(-2)}
    </div>
  );
}
