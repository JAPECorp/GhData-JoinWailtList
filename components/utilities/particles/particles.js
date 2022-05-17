import React from "react";
import particlesConfig from "../../config/particle.config";
import Particles from "react-tsparticles";

export default function ParticlesComponent() {
    return ( <
        Particles params = {
            particlesConfig
        }
        />
    );
}