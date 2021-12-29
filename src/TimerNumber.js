import React from "react";

export default function TimerNumber(props) {
  return (
    <div className="mx-1 p-2 bg-white text-nypnk-500 rounded-lg font-mono leading-none hover:scale-105 shadow-xl shadow-nyblue-200/50">
      {("00" + props.number).slice(
        String(props.number).length > 2 ? -String(props.number).length : -2
      )}
    </div>
  );
}
