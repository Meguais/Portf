import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Software Developer",
          "Javascript, TypeScript, .NET Core, Python, Rust",
          "React, Vue, NextJS, NuxtJS, ElectornJS, Tauri",
          "Redis, RabbitMQ, Apache Kafka",
          "MicroServices Architectures",
          "Kubernetes, Docker"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
