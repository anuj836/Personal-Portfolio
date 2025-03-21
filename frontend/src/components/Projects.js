import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/tourism.png";
import projImg2 from "../assets/img/retail.png";
import projImg3 from "../assets/img/farmzy.png";
import projImg4 from "../assets/img/portfolio.png";
import projImg5 from "../assets/img/login.png";
import projImg6 from "../assets/img/github portfoli.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tours And Travels",
      description: "Web Devlopment",
      imgUrl: projImg1,
    },
    {
      title: "Retail Billing System",
      description: "Python Development",
      imgUrl: projImg2,
    },
    {
      title: "Farmer's Wholesale Shop",
      description: "Php Devlopment",
      imgUrl: projImg3,
    },
    {
      title: "Demo Website",
      description: "Tailwind Devlopment",
      imgUrl: projImg4,
    },
    {
      title: "Login Page",
      description: "Python Devlopment",
      imgUrl: projImg5,
    },
    {
      title: "Demo Webiste",
      description: "Bootstrap Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}