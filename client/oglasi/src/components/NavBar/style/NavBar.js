import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  background-color: rgba(69, 91, 237, 0.9);
  top: 0;
  justify-content: center;
  z-index: 10;
`;

export const ListGroup = styled.ul`
  display: flex;
  width: 95%;
  justify-content: space-between;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  user-select: none;
  font-weight: bold;
  color: #fff;
  padding: 4px 10px;
  margin: 0 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const ProfileGroup = styled.ul`
  display: flex;
`;
