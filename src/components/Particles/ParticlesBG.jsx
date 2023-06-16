import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import styled from 'styled-components'



const ParticlesBG = () => {
    const particlesInit = useCallback(async engine => {

        await loadFull(engine);
    }, []);


    return (
        <ParticlesContainer>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fpsLimit: 120,
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
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 0.5,
                            },
                            repulse: {
                                distance: 75,
                                duration: 0.1,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#f40041",
                        },
                        links: {
                            color: "#B909A4",
                            distance: 100,
                            enable: true,
                            opacity: 0.3,
                            width: 1.5,
                            
                        },
                        collisions: {
                            enable: true,

                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 1.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 500,
                            },
                            value: 70,
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: "image",

                            images: [
                                {
                                    src: "https://img.icons8.com/nolan/64/bot.png",
                                    width: 8,
                                    height: 8,
                                },
                                {
                                    src: "https://img.icons8.com/color/480/null/twitch--v1.png",
                                    width: 7,
                                    height: 7,
                                },
                                {
                                    src: "https://img.icons8.com/color/96/null/play-station.png",
                                    width: 7,
                                    height: 7,
                                },
                                {
                                    src: "https://img.icons8.com/fluency/48/null/minecraft-logo.png",
                                    width: 9,
                                    height: 9,
                                },
                                {
                                    src: "https://img.icons8.com/fluency/48/null/gta-5.png",
                                    width: 8,
                                    height: 8,
                                },
                            ],
                        },
                        size: {
                            value: { min: 5, max: 8 },
                        },
                        generator: "polygonPathGenerator",
                    },
                    detectRetina: true,
                }}
            />
        </ParticlesContainer>
    );
};


export default ParticlesBG;


const ParticlesContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 800px;

`







