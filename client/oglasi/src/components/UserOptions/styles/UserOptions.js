import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  position: fixed;
  flex-direction: column;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  min-width: 150px;
  height: fit-content;
  padding-left: 10px;
  z-index: 20;
`;

export const UserLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;
