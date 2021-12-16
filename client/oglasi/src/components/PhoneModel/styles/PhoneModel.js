import styled from "styled-components/macro";
import { animated } from "@react-spring/web";

export const ModelLink = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 20px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  transition: 0.2s ease;

  :hover {
    transform: scale(1.1);
  }
`;

export const ModelContainer = styled(animated.li)``;
