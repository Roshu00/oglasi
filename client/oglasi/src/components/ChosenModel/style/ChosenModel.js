import styled from "styled-components/macro";
import { animated } from "@react-spring/web";
import { Link } from "react-router-dom";

export const MainContainer = styled(animated.div)`
  width: 90%;
  flex-direction: column;
`;

export const ChosenModelContainer = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  img {
    margin: 0 20px;
    height: 200px;
    transform: scale(1.2);
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ChosenModelName = styled.h1`
  color: #888888;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const InfoText = styled.p`
  color: #888888;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 15px;

  span {
    font-size: 16px;
    color: rgba(69, 91, 237, 0.8);
    margin-right: 7px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
  transition: 0.3s ease;
  margin: 20px;
  width: 60px;
  height: 60px;
  svg {
    width: 50px;
    height: 50px;
    transition: 0.4s ease;
  }
  p {
    font-size: 0;
    color: #fff;
    font-weight: bold;
    transition: 0.4s ease;
  }

  :hover {
    background-color: red;
    width: 200px;
    border-radius: 50px;
    p {
      font-size: 0.9rem;
    }
    svg {
      stroke: white;
      transform: rotate(180deg);
    }
  }
`;

export const PostButton = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
  transition: 0.3s ease;
  width: 60px;
  height: 60px;
  margin: 20px;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "click")};

  svg {
    width: 50px;
    height: 50px;
    transition: 0.4s ease;
    stroke: #000;
  }
  p {
    font-size: 0;
    color: #fff;
    font-weight: bold;
    transition: 0.4s ease;
  }

  :hover {
    background: linear-gradient(
      90deg,
      rgba(205, 0, 255, 1) 0%,
      rgba(0, 255, 218, 1) 100%
    );
    width: 200px;
    border-radius: 50px;
    p {
      font-size: 0.9rem;
    }
    svg {
      stroke: white;
      transform: rotate(180deg);
    }
  }
`;

export const SmallLoader = styled.div`
  width: 12px;
  height: 12px;
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 3px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: spin 2s linear infinite;
  margin-left: 7px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
