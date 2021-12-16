import React, { useState } from "react";
import { useSpring, useTransition } from "@react-spring/core";
import { ModelLink, ModelContainer } from "./styles/PhoneModel";

function PhoneModel({
  model,
  chosenModel,
  setChosenModel,
  setChosenModelPosition,
}) {
  const [loaded, setLoaded] = useState(false);
  const props = useSpring(
    chosenModel
      ? {
          from: {
            display: "flex",
            opacity: 1,
          },
          to: async (next, cancel) => {
            await next({ opacity: 0 });
            await next({ display: "none" });
          },
        }
      : {
          from: {
            opacity: 0,
          },
          to: {
            display: "flex",
            opacity: 1,
          },
        }
  );
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <ModelContainer
      key={model.phone_name}
      onClick={(e) => {
        setChosenModel(model);
        setChosenModelPosition({ x: e.clientX, y: e.clientY });
        scrollToTop();
      }}
      style={props}
    >
      <ModelLink>
        <img src={model.image} />
        {model.brand ? model.brand + " " + model.phone_name : model.phone_name}
      </ModelLink>
    </ModelContainer>
  );
}

export default PhoneModel;
