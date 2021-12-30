import { React, useEffect } from "react";
import { Fireworks, useFireworks } from "fireworks-js/dist/react";

export default function Greetings(props) {
  const { setOptions, enabled, options } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345
      },
      delay: {
        min: 13,
        max: 18
      },
      rocketsPoint: 50,
      opacity: 0.8,
      speed: 7,
      acceleration: 1.025,
      friction: 0.98,
      gravity: 0.5,
      particles: 120,
      trace: 2,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03
        }
      },
      boundaries: {
        visible: false,
        x: 100,
        y: 150
      },
      sound: {
        enabled: props.audio,
        files: [
          "https://fireworks.js.org/sounds/explosion0.mp3",
          "https://fireworks.js.org/sounds/explosion1.mp3",
          "https://fireworks.js.org/sounds/explosion2.mp3"
        ],
        volume: {
          min: 15,
          max: 25
        }
      },
      mouse: {
        click: true,
        move: false,
        max: 50
      }
    }
  });

  useEffect(() => {
    setOptions({ sound: { enabled: props.audio } });
  }, [props]);

  let g = null;
  if (props.greet) {
    g = (
      <div className="fixed z-10 h-screen w-screen text-center justify-center place-content-center flex flex-col space-y-6 sm:space-y-0 leading-4 text-5xl sm:text-8xl lg:text-[11rem]">
        <h1 className="text-nyyellow-400">BUON ANNO</h1>
        <p className="text-nypink-400">{new Date().getFullYear()}</p>
      </div>
    );
  }
  return (
    <>
      {g}
      <Fireworks
        enabled={enabled}
        options={options}
        className="bg-gradient-to-t from-nyblue-100 to-slate-900 bg-cover bg-no-repeat fixed left-0 top-0 w-full h-full block"
      />
    </>
  );
}
