import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sinan BENLIBAS </span>
            from <span className="purple"> Istanbul, Turkey.</span>
            <br />
            <br />
            RESTful API Development: I have the ability to create and manage RESTful APIs in .NET, JavaScript (TypeScript) and Python. I can effectively use databases such as MSSQL, MySQL, Postgresql and MongoDB for CRUD operations.
            <br />
            <br />
            Frontend Integration: I have the ability to successfully integrate the APIs I develop with frontend technologies such as Vue, React and Nuxt and Next. In this way, I can design user-friendly and impressive user interfaces.I also have knowledge of Laravel and can build websites with Laravel.
            <br />
            CSS frameworks I usually use are Tailwind, ElementUI and Bootstrap
            <br />
            <br />
            Microservice Architecture: I have an interest and knowledge of microservice architecture and the ability to design and develop scalable and flexible applications. In this context, I can effectively use components such as Redis, RabbitMQ and Apache Kafka.
            <br />
            <br />
            Database Management: I am experienced in data management and modeling using different types of databases such as MSSQL, MySQL, Postgresql, Firebase and MongoDB. I can optimize database operations by using ORM (Object-Relational Mapping) tools effectively.
            <br />
            <br />
            Docker Container: I have a basic knowledge of Docker and I am ready to manage my projects in containers. In this way, I can quickly deploy my applications and keep them running in a consistent environment.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Film
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sinan BENLIBAS</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
