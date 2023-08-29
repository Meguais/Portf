import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/u5.jpg";
import editor from "../../Assets/Projects/dot.png";
import nuxtauth from "../../Assets/Projects/nuxt-auth.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/back.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nuxtauth}
              isBlog={false}
              title="Nuxt-Auth/Sidebase"
              description="A modular template that provides essential features to quickly get started on your full stack Nuxt 3 project"
              ghLink="https://github.com/Meguais/Nuxtjs-authentication-Social-and-Credential"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NestJS Microservices"
              description="Fully managed Microservices starter pack using NestJs, RabbitMQ, Kong api gateway, MongoDB, PostgreSQL, Grafana, Loki, Fluentbit."
              ghLink="https://github.com/Meguais/nestjs-microservices"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Netcore-Microservices"
              description="Microservices on .Net platforms which used Asp.Net Web API, Docker, RabbitMQ, MassTransit, Grpc, Ocelot API Gateway, MongoDB, Redis, PostgreSQL, SqlServer, Dapper, Entity Framework Core, CQRS and Clean Architecture implementation. Also includes Cross-Cutting concerns like Implementing Centralized Distributed Logging with Elasticsearch"
              ghLink="https://github.com/Meguais/netcore-microservices"            
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="MMORPG Backend (Netcore, RabbitMQ, Elastic)"
              description="support thousands of players in the same world by instancing up and out. A single zone can be instanced multiple times to support a large population in one area. Areas of a map can also be split up into multiple zones to support a larger population. In addition to server instance management also handles persistence for Accounts, Characters, Abilities, Inventory and more."
              ghLink="https://github.com/Meguais/MMOBACKEND"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
