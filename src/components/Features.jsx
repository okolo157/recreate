import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faCheckDouble,
  faGears,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesAll = styled.div`
  margin-top: 100px;
  background-image: url("../assets/images/background-5.png");
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
`;

 const Paragraph = styled.p`
   background: linear-gradient(90deg, #0b6fcb, #43a5fe);
   background-clip: text;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
 `;

const FeaturesMain = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 0px 8px 0px;
  padding: 30px;
  gap: 40px;
`;

const FeatureItem = styled.div`
  width: 80%;
  height: 300px;
  backdrop-filter: blur(40px);
  border: 1px inset #424286;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: start;
  padding: 30px;

  &:hover {
    background: linear-gradient(90deg, #0a0c26, #101128);
    transition: 0.4s ease-in-out;
  }

  p {
    font-size: 18px;
  }

  h3 {
    font-size: 24px;
    color: white;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 40px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Features() {
  const features = [
    {
      heading: "Accurate Detection",
      description:
        "Our tool provides precise and accurate detection of UI componens to provide reusable code.",
      icon: faCheckDouble,
    },
    {
      heading: "Accurate Detection",
      description:
        "Our tool provides precise and accurate detection of UI componens to provide reusable code.",
      icon: faCheckDouble,
    },
    {
      heading: "Optimized Code",
      description:
        "With specialized AI machine learning algorithms, we can ensure we provide optimized code that works.",
      icon: faGears,
    },
    {
      heading: "Multi-framework support",
      description:
        "Our tool provides code for multiple frameworks like React, Angular, Vue, etc.",
      icon: faBoxesStacked,
    },
    {
      heading: "Interactivity support",
      description:
        "Our seamless GUI provides an interactive experience to our users, with limitless customization.",
      icon: faPeopleArrows,
    },
    {
      heading: "Interactivity support",
      description:
        "Our seamless GUI provides an interactive experience to our users, with limitless customization.",
      icon: faPeopleArrows,
    },
  ];

  return (
    <FeaturesAll>
      <Title>Why Choose Us ❔</Title>
      <Subtitle>
        Take advantage of all the tools and features jam-packed into a
        drag-and-drop platform
        <br /> that works like a design to code converter, and create responsive
        prototypes straight in your browser.
      </Subtitle>
      <FeaturesMain>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FontAwesomeIcon
              icon={feature.icon}
              size="3x"
              style={{ marginBottom: "30px" }}
              color="white"
            />
            <h3>{feature.heading}</h3>
            <Paragraph>{feature.description}</Paragraph>
          </FeatureItem>
        ))}
      </FeaturesMain>
    </FeaturesAll>
  );
}

export default Features;
