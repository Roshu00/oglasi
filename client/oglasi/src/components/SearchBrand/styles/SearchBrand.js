import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { animated } from "react-spring";

export const ModelContainer = styled.ul`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 40px auto;
  justify-content: space-between;
`;

export const ModelListContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  margin-top: 65px;
`;

export const AnimatedTitle = styled(animated.h1)`
  position: absolute;
  margin: 0;
  padding: 0;
`;

export const InputContainer = styled.form`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 10px;
  z-index: 10;
  background-color: rgba(69, 91, 237, 0.9);
`;

export const PriceInput = styled.input`
  padding: 5px;
  outline: none;
`;

export const PriceInputContainer = styled.div`
  display: flex;
  align-items: center;

  label {
    margin: 0 10px;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;

  input {
    padding: 5px;
    outline: none;
  }
  button {
    outline: none;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
export const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
