import styled from "styled-components/macro";
import postImage from "../../../images/image-placeholder.png";
import sellerImage from "../../../images/no-image.png";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

export const PostSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10px auto;
  height: fit-content;
  align-items: center;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-right: 5px;
`;

export const SellerItem = styled.p`
  display: flex;
  flex: 2;
  align-self: flex-start;
  ::before {
    color: rgb(69, 91, 237);
    margin: 0 5px 0 0;
    font-weight: 600;
    content: "${({ prefix }) => prefix}";
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const PostTitle = styled.p`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px 0 0;
  text-transform: capitalize;
  align-self: flex-start;
  font-size: 1.6rem;
  font-weight: bold;

  ${({ used }) =>
    used
      ? `
    ::after {
        content: 'koriceno';
        color: #fff;
        align-self: center;
        font-weight: bold;
        font-size: 1rem;
        padding: 8px;
        border-radius: 8px 0px;
        background-color: #Ff9b06;
    };
  `
      : `
    ::after {
        content: 'novo';
        color: #fff;
        align-self: center;
        font-weight: bold;
        font-size: 1rem;
        border-radius: 8px 0px;
        padding: 8px;
        background-color: #26f773;
    }
  `}
`;

export const PostImages = styled(Image)`
  min-width: 100%;
  min-height: 500px;
  margin: auto 5px;
  ${({ imagesPath }) =>
    imagesPath ||
    `background-image: url("${postImage}");
    background-repeat: no-repeat;
    background-position: center;`}
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  color: rgb(29, 31, 31);
  font-weight: bold;
  align-self: flex-start;

  ::before {
    content: "Opis:";
    margin: 10px 0px;
    color: rgb(69, 91, 237);
  }
`;

export const SellerPhoto = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 1px rgba(69, 91, 237);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("${sellerImage}");
`;

export const SellerInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  align-items: center;
  padding: 30px;
`;

export const SellerButton = styled(Link)`
  width: 80%;
  color: #fff;
  text-decoration: none;
  text-align: center;
  background-color: rgb(69, 91, 237);
  font-weight: bold;
  border: none;
  padding: 10px;
  border-radius: 2px;
  cursor: pointer;
  margin: 10px;

  :hover {
    transition: 200ms;
    opacity: 0.8;
  }
`;
