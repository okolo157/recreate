import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import faqbg from "../assets/images/section-bg.png";

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-image: url(${faqbg});
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  overflow: hidden;
`;

const LeftContent = styled.div`
  flex: 40%;
  padding: 40px;
  backdrop-filter: blur(20px);
`;

const RightContent = styled.div`
  flex: 60%;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 20px;
  color: alicewhite;
  text-align: left;
`;

const Question = styled.h3`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 10px;
  color: alicewhite;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Answer = styled.p`
  font-size: 17px;
  width: 90%;
  margin-bottom: 20px;
  line-height: 1.6;
  text-align: left;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #0b6fcb;
  margin: 20px 0;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #0b6fcb;
  cursor: pointer;
  font-size: 1.2em;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Recreate AI Code Generator?",
      answer:
        "Recreate AI Code Generator is a web application that allows users to generate clean, reusable UI code from screenshots or mockups.",
    },
    {
      question: "How does it work?",
      answer:
        "Our AI systems analyze the uploaded images and generate pixel-perfect code for your UI elements, from simple to complex components.",
    },
    {
      question: "Is it free to use?",
      answer:
        "Yes, Recreate AI Code Generator offers a free tier with limited credits. You can upgrade to a premium plan for more features and credits.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply sign up for an account, upload your screenshots or mockups, and let our AI generate the code for you.",
    },
    {
      question: "Do I need to be a tech-savvy person to use AI?",
      answer:
        "Artificial Intelligence can sound overwhelming and complex, but we create the tools to make their use as simple as possible. You don’t need to be a technical expert to use our AI Image Generator. Just play around with it, and you will get good results super fast!",
    },
    {
      question: "How much does the Image Generator cost?",
      answer:
        "Check the prices for the Premium subscription here With it, you have unlimited generations and downloads. It also gives you access to all our stock resources, tools, and much more.",
    },
  ];

  return (
    <FaqContainer>
      <ContentWrapper>
        <LeftContent>
          <Title>Frequently Asked Questions</Title>
        </LeftContent>
        <RightContent>
          {faqs.map((faq, index) => (
            <div key={index}>
              <Question onClick={() => toggleAnswer(index)}>
                {faq.question}
                <ToggleButton>
                  <FontAwesomeIcon
                    icon={openIndex === index ? faMinus : faPlus}
                  />
                </ToggleButton>
              </Question>
              {openIndex === index && <Answer>{faq.answer}</Answer>}
              <Divider />
            </div>
          ))}
        </RightContent>
      </ContentWrapper>
    </FaqContainer>
  );
}

export default FAQs;
