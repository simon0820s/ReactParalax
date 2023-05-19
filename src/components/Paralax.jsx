import React from "react";
import styled from "styled-components";
import { useEffect,useRef } from "react";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #1c0522, transparent);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;
const Stars = styled.img``;
const Moon = styled.img`
  mix-blend-mode: screen;
`;
const Mountain = styled.img`
  z-index: 8;
`;
const Title = styled.h1`
  position: absolute;
  color: snow;
  white-space: nowrap;
  font-size: 7.5vw;
  font-weight: bold;
  z-index: 9;
`;
const Explore = styled.a`
  text-decoration: none;
  padding: 8px 30px;
  border-radius: 40px;
  border: none;
  background-color: snow;
  color: #2b1055;
  font-size: 1.5em;
  transform: translateY(100px);
  cursor: pointer;
  z-index: 9;
`;
const Mountains = styled.img`
  z-index: 10;
`;

const Paralax = () => {

  const starsRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll")
    };

    const scrollListener = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Container>
      <Stars src="src/assets/stars.png" />
      <Moon src="src/assets/moon.png" />
      <Mountain src="src/assets/mountains_behind.png" />
      <Title>Moon Light</Title>
      <Explore href="#sec">Explore</Explore>
      <Mountains src="src/assets/mountains_front.png" />
    </Container>
  );
};

export default Paralax;
