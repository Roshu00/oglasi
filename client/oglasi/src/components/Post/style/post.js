import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import postImage from "../../../images/image-placeholder.png";
import { Image } from "cloudinary-react";

export const PostCard = styled.div`
  display: flex;
`;

export const Card = styled(Link)`
  min-width: 500px;
  max-width: 500px;
  height: 200px;
  padding: 5px;
  display: flex;
  text-align: center;
  text-decoration: none;
  margin: 3px;
  transition: 0.1s;

  :hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #000;
  margin: 2px 5px;
  padding: 2px;
  text-transform: capitalize;
  ${({ used }) =>
    used
      ? `
    ::after {
        content: 'koriceno';
        color: #fff;
        font-weight: bold;
        font-size: 0.9rem;
        padding: 1px 5px;
        border-radius: 8px 0px;
        background-color: #Ff9b06;
    };
  `
      : `
    ::after {
        content: 'novo';
        color: #fff;
        font-weight: bold;
        font-size: 0.9rem;
        border-radius: 8px 0px;
        padding: 1px 5px;
        background-color: #26f773;
    }
  `}
`;

export const Image1 = styled(Image)`
  min-width: 200px;
  max-width: 200px;
  height: 95%;
  margin: auto 5px;
`;

export const Descrtiption = styled.p`
  color: #000;
  opacity: 0.8;
  margin: 2px 5px;
  padding: 2px;
  text-transform: capitalize;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  background-color: #fff;
`;

export const ImageComp = styled.img`
  min-width: 200px;
  max-width: 200px;
  height: 95%;
  margin: auto 5px;
  background-image: url("${postImage}");
  background-position: center;
`;

export const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 95%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const Footer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  bottom: 5px;
  width: 100%;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  margin: 0px 5px;
  color: #000;

  ::after {
    content: " €";
  }
`;

export const Date = styled.p`
  height: 10px;
  padding: 0;
  margin: 5px 2px;
  font-size: 0.8rem;
  color: #000;
  opacity: 0.5;
`;

export const Seller = styled.p`
  height: 10px;
  padding: 0;
  margin: 5px 2px;
  font-size: 0.8rem;
  color: #000;
  opacity: 0.6;
`;

export const SmallInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
