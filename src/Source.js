import React from "react";

export default function Source(props) {
  return (
    <div className="flex items-end justify-end fixed bottom-0 left-0 mb-4 ml-4 z-10">
      <a
        title="Source code"
        href="https://github.com/Jystro/buon-anno"
        target="_blank"
        rel="noreferrer"
        className={`block w-16 h-16 rounded-full transition-all transform hover:scale-110 hover:rotate-12 bg-white hover:shadow-lg hover:${props.shadowColor}`}
      >
        <img
          className="object-cover object-center w-full h-full rounded-full"
          src={"https://github.githubassets.com/favicons/favicon.svg"}
          alt="GitHub's icon"
        />
      </a>
    </div>
  );
}
