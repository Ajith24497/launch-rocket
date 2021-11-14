import React, { useContext, useEffect } from "react";
import anime from "animejs";
import Home from "./pages/Home";
import Sections from "./pages/Sections";
import { Context } from "./contexts/context";

import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const context = useContext(Context);
  const { animProgress, isPlay } = context[0];
  const { updateAnimProgress, updatePlayState } = context;

  useEffect(() => {
    const svgPath = anime.path(".path_box path");

    const animation = anime({
      targets: ".box",
      translateX: svgPath("x"),
      translateY: svgPath("y"),
      rotate: svgPath("angle"),
      easing: "linear",
      elasticity: 2000,
      duration: 5000,
      loop: true,
      autoplay: false,
      update: function (anim) {
        if (Math.round(anim.progress) === animProgress)
          pauseAnim(Math.round(anim.progress));
      },
    });

    (function () {
      if (isPlay) {
        animation.seek(animation.duration * 0.01 * (animProgress - 25));
        animation.play();
        updatePlayState(false);
      }
    })();

    const pauseAnim = (progress) => {
      updateAnimProgress(progress);
      animation.pause();
    };
  }, [isPlay]);

  return (
    <div>
      <Home />
      <div className="svg_area">
        <div id="box" className="box"></div>
        <svg className="path_box" width="100%" heigth="100%">
          <path
            d="M1000 300 L300 1050 L1000 1750 L300 2450 L1000 3100"
            stroke="red"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
      <Sections />
    </div>
  );
}

export default App;
