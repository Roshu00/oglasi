import React, { useState } from "react";
import {
  SpecificationGridContainer,
  SpecGroup,
  Specs,
  SpecCell,
} from "./styles/SpecificationGrid";
import { useSpring } from "@react-spring/core";

function SpecificationGrid({ status, Info }) {
  const [show, setShow] = useState(false);

  const props = useSpring(
    show
      ? {
          from: {
            opacity: 0,
            height: 0,
          },
          to: {
            opacity: 1,
            display: "flex",
            height: 2000,
          },
        }
      : {
          from: { opacity: 1, height: 2000 },
          to: async (next, cancel) => {
            await next({ height: 0, opacity: 0 });
            await next({ display: "none" });
          },
        }
  );

  if (status) {
    return (
      <>
        <SpecificationGridContainer style={props}>
          {Info.specifications.map((item) => {
            return (
              <SpecGroup>
                {item.title}
                <Specs>
                  {item.specs.map((spec) => {
                    return (
                      <SpecCell>
                        <div>
                          <spam>{spec.key}</spam>
                        </div>
                        <div>{spec.val}</div>
                      </SpecCell>
                    );
                  })}
                </Specs>
              </SpecGroup>
            );
          })}
        </SpecificationGridContainer>
        <button
          onClick={() => {
            setShow(!show);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          {show ? "Zatvori specifikacije" : "Otvori specifikacije"}
        </button>
      </>
    );
  } else {
    return "hello";
  }
}

export default SpecificationGrid;
