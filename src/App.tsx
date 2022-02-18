import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRotateBackward,
  faMask,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const TomorrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 2rem;
`;

const TodaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 2rem;
`;

const HeroIcon = styled.div`
  margin-top: 10rem;
  color: var(--yellow);
`;
const ReCastHeroButton = styled.button`
  width: 3rem;
  box-sizing: content-box;
  height: 3rem;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: bold;
  background-color: var(--yellow);
  color: var(--blue);
  border-width: 0px;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
const TodaysHeroTitle = styled.h4`
  color: var(--yellow);
  margin-bottom: 0px;
`;
const TodaysHeroText = styled.h1`
  color: var(--yellow);
  margin-top: 0px;
  font-size: 3.5rem;
`;
const TomorrowsHeroTitle = styled.h5`
  color: var(--yellow);
  margin-bottom: 0px;
`;
const TomorrowsHeroText = styled.h1`
  color: var(--yellow);
  margin-top: 0px;
`;

function App() {
  return (
    <Container>
      <ReCastHeroButton>
        <FontAwesomeIcon icon={faArrowRotateBackward} />
      </ReCastHeroButton>
      <HeroIcon>
        <FontAwesomeIcon className="heroIcon" icon={faMask} />
      </HeroIcon>
      <TodaysContainer>
        <TodaysHeroTitle>Hero of today</TodaysHeroTitle>
        <TodaysHeroText>Balazs</TodaysHeroText>
      </TodaysContainer>
      <TomorrowsContainer>
        <TomorrowsHeroTitle>Hero of tomorrow</TomorrowsHeroTitle>
        <TomorrowsHeroText>Niklas</TomorrowsHeroText>
      </TomorrowsContainer>
    </Container>
  );
}

export default App;
