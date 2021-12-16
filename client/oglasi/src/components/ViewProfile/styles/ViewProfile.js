import styled from "styled-components/macro";
import { Image } from "cloudinary-react";
import sellerImage from "../../../images/image-placeholder.png";

export const ProfileContainer = styled.div`
  width: 80%;
  height: 100vh;
  margin: 10px auto;
`;

export const ProfileImage = styled(Image)`
  min-width: 240px;
  min-height: 240px;
  border-radius: 50%;
  margin: 10px;
  border: solid 1px rgba(69, 91, 237, 0.9);

  ${({ publicId }) =>
    publicId ||
    `background-image: url("${sellerImage}");
    background-repeat: no-repeat;
    background-position: center;`}
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const GeneralInformation = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInformationText = styled.p`
  font-weight: bold;
  display: flex;
  align-items: center;

  img {
    height: 20px;
    margin-right: 5px;
  }
`;

export const Username = styled.h1`
  display: flex;
  align-items: center;
  img {
    height: 40px;
    margin-right: 10px;
  }
`;

export const Rating = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

export const StarContainer = styled.div``;

export const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 20px;
`;
