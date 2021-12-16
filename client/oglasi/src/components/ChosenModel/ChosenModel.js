import React, { useEffect, useState } from "react";
import { useSpring } from "@react-spring/core";
import {
  Title,
  ChosenModelContainer,
  InfoContainer,
  MainInfoContainer,
  ChosenModelName,
  InfoText,
  ButtonContainer,
  MainContainer,
  CloseButton,
  SmallLoader,
  PostButton,
} from "./style/ChosenModel";
import { getChosenModel } from "../../helpers/getData";
import DisplayPosts from "../DisplayPosts/DisplayPosts";

//import COMPONENTS
import SpecificationGrid from "../SpecificationGrid/SpecificationGrid";

function ChosenModel({ chosenModel, chosenModelPosition, setChosenModel }) {
  const [chosenModelInfo, setChosenModelInfo] = useState({});
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(false);
    getChosenModel(chosenModel.detail)
      .then((data) => {
        setChosenModelInfo(data.data);
        return data.status;
      })
      .then((status) => setStatus(status));
  }, [chosenModel]);

  const props = useSpring(
    chosenModel
      ? {
          from: {
            display: "none",
            x: chosenModelPosition.x,
            y: chosenModelPosition.y,
            opacity: 0,
          },
          to: {
            display: "flex",
            x: 0,
            y: 0,
            opacity: 1,
            margin: "auto",
            padding: 50,
            overflow: "visible",
          },
        }
      : {
          to: async (next, cancel) => {
            await next({
              overflow: "hidden",
              opacity: 0,
              height: 0,
              margin: 0,
              padding: 0,
            });
            await next({ display: "none" });
          },
        }
  );

  return (
    <MainContainer style={props}>
      <ChosenModelContainer>
        <MainInfoContainer>
          <img src={chosenModel.image} />
          <InfoContainer>
            <ChosenModelName>{chosenModel.phone_name}</ChosenModelName>
            <InfoText>
              <span>Datum:</span>
              {status ? " " + chosenModelInfo.release_date : <SmallLoader />}
            </InfoText>
            <InfoText>
              <span>OS:</span>
              {status ? " " + chosenModelInfo.os : <SmallLoader />}
            </InfoText>
            <InfoText>
              <span>Dimenzije:</span>
              {status ? " " + chosenModelInfo.dimension : <SmallLoader />}
            </InfoText>
            <InfoText>
              <span>Memorija:</span>
              {status ? " " + chosenModelInfo.storage : <SmallLoader />}
            </InfoText>
          </InfoContainer>
        </MainInfoContainer>
        <ButtonContainer>
          <CloseButton
            onClick={() => {
              setChosenModel(false);
              setStatus(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <p>zatvori ovaj model</p>
          </CloseButton>
          <PostButton
            to={{
              pathname: "/create/post",
              state: {
                brand: status ? chosenModelInfo.brand : "",
                model: status ? chosenModelInfo.phone_name : "",
              },
            }}
            disabled={!status}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-paperclip"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
            <p>postvai oglas za ovaj model</p>
          </PostButton>
        </ButtonContainer>
      </ChosenModelContainer>
      <SpecificationGrid status={status} Inf  o={chosenModelInfo} />
      <DisplayPosts status={status} chosenModelInfo={chosenModelInfo} />
    </MainContainer>
  );
}

export default ChosenModel;
