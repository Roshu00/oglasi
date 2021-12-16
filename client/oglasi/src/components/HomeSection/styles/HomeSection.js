import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 10px auto;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 70%;
  height: 70vh;
  background-image: url("https://images.unsplash.com/photo-1511227499331-25c621db940e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  color: #fff;
`;

export const Button = styled(Link)`
  width: 200px;
  background-color: rgba(69, 91, 237, 0.9);
  color: #fff;
  text-decoration: none;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  transition: all 0.3s ease;
  border-radius: 20px;

  :hover {
    background-color: rgba(69, 91, 237, 1);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;
