import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const HomeParticles = () => {

  const particlesLoaded = (container) => {
    return
  };
  
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: [
            "#e6194b",
            "#3cb44b",
            "#ffe119",
            "#4363d8",
            "#f58231",
            "#911eb4",
            "#46f0f0",
            "#f032e6",
            "#bcf60c",
            "#fabebe",
          ],
          random: true,
          anim: {
            enable: true,
            speed: 1,
            sync: true,
          },
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce"
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      detectRetina: true
    }}
  />
  );
};

export default HomeParticles;

