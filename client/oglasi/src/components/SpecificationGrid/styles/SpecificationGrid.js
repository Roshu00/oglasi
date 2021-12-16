import styled from "styled-components/macro";
import { animated } from "@react-spring/web";
export const SpecificationGridContainer = styled(animated.div)`
  flex-direction: column;
  width: 100%;
`;

export const SpecGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

export const Specs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const SpecCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  padding: 10px;
  border: 1px solid black;
  width: auto;
  flex: 1;

  spam {
    color: rgba(69, 91, 237, 0.9);
    font-weight: bold;
    border-bottom: 1px solid black;
  }
`;
