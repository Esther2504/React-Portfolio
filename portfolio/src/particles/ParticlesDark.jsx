import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
//import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesDark = (props) => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#0A0421",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 80,
          },
        },
      },
      particles: {
        shape: {
          type: "circle",
          stroke: {
            width: 1,
            color: "#000000",
          },
          polygon: {
            nb_sides: 8,
          },
        },
        links: {
          color: "#c5c6c7",
          distance: 160,
          enable: true,
          opacity: 0.2,
          width: 2,
        },
        move: {
          bounce: true,
          direction: "none",
          enable: true,
          outMode: "out",
          random: true,
          speed: { min: 1, max: 2 },
          straight: false,
        },
        opacity: {
          value: { min: 0.01, max: 0.01 },
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesDark;
