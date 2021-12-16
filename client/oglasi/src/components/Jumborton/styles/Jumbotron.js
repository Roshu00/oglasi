import styled from "styled-components/macro";

export const JumbotronContainer = styled.div`
  width: 70%;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const JumbotronCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const CardText = styled.p`
  font-size: 1.1rem;
  margin: 10px;
  color: #000;
`;

export const CardImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
