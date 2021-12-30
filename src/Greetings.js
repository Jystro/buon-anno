import { React, useEffect } from "react";
import { Fireworks, useFireworks } from "fireworks-js/dist/react";

export default function Greetings(props) {
  const { setEnabled, setOptions, enabled, options } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345
      },
      delay: {
        min: 15,
        max: 15
      },
      rocketsPoint: 50,
      speed: 10,
      acceleration: 1.2,
      friction: 0.96,
      gravity: 1,
      particles: 90,
      trace: 3,
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
        visible: false
      },
      sound: {
        enabled: props.audio,
        files: [
          "https://fireworks.js.org/sounds/explosion0.mp3",
          "https://fireworks.js.org/sounds/explosion1.mp3",
          "https://fireworks.js.org/sounds/explosion2.mp3"
        ],
        volume: {
          min: 1,
          max: 2
        }
      },
      mouse: {
        click: true,
        move: false,
        max: 1
      }
    }
  });

  useEffect(() => {
    setOptions({ sound: { enabled: props.audio } });
  }, [props]);

  const style = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "#000"
  };

  return (
    <>
      <Fireworks style={style} enabled={enabled} options={options}>
        <div
          style={{
            display: "flex",
            background: "#607d8b"
          }}
        ></div>
      </Fireworks>
    </>
  );
}
