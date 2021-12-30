import React from "react";

export default function TimerNumber(props) {
  return (
    <div className="mx-1 p-2 bg-white text-nypnk-500 rounded-lg font-mono leading-none transition-transform duration-100 ease-out hover:scale-105 hover:-translate-y-1 shadow-xl shadow-nyblue-200/50">
      {("00" + props.number).slice(
        String(props.number).length > 2 ? -String(props.number).length : -2
      )}
    </div>
  );
}
