import React, { useContext, useState, useEffect } from "react";
import PhoneList from "../../Contexts/phonesContext";
import { BrandInput } from "../FilterInput/FilterInput";
import search from "../../images/svg/search.svg";
import PhoneModel from "../PhoneModel/PhoneModel";
import ChosenModel from "../ChosenModel/ChosenModel";

//styles
import {
  ModelContainer,
  InputContainer,
  PriceInput,
  PriceInputContainer,
  SearchBox,
  Loader,
  AnimatedTitle,
  ModelListContainer,
} from "./styles/SearchBrand";

const ModelList = ({
  models,
  chosenModel,
  setChosenModel,
  setChosenModelPosition,
}) => {
  return (
    <>
      <ModelContainer>
        {models.map((model) => {
          return (
            <PhoneModel
              key={model.phone_name}
              model={model}
              setChosenModel={setChosenModel}
              chosenModel={chosenModel}
              setChosenModelPosition={setChosenModelPosition}
            />
          );
        })}
      </ModelContainer>
    </>
  );
};

function SearchBrand() {
  const PhoneListContext = useContext(PhoneList);
  useEffect(() => {
    PhoneListContext.getLatestModels();
  }, []);
  const [brand, setBrand] = useState(PhoneListContext.currentBrand || "");
  const [lowPrice, setLowPrice] = useState(1);
  const [highPrice, setHighPrice] = useState(10000);
  const [used, setUsed] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [chosenModel, setChosenModel] = useState(false);
  const models = PhoneListContext.models;
  const [chosenModelPosition, setChosenModelPosition] = useState({});
  return (
    <>
      {
        <InputContainer
          onSubmit={(e) => {
            e.preventDefault();
            const slug = brand + " " + searchText;
            if (slug === " ") {
              PhoneListContext.getLatestModels();
            } else {
              PhoneListContext.searchModels(slug);
            }
          }}
        >
          <BrandInput setBrand={setBrand} />
          <PriceInputContainer>
            <label>od:</label>
            <PriceInput
              type="number"
              placeholder="Cena od:"
              onChange={(e) => {
                setLowPrice(e.target.value);
              }}
            />
            <label>do:</label>
            <PriceInput
              type="number"
              placeholder="Cena do:"
              onChange={(e) => {
                setHighPrice(e.target.value);
              }}
            />
          </PriceInputContainer>
          <SearchBox>
            <input
              placeholder="Pretraga Modela"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button type="submit">
              <img src={search} />;
            </button>
          </SearchBox>
        </InputContainer>
      }
      <ModelListContainer>
        <ChosenModel
          chosenModel={chosenModel}
          chosenModelPosition={chosenModelPosition}
          setChosenModel={setChosenModel}
        />
        {
          <ModelList
            models={models}
            brand={brand}
            lowPrice={lowPrice}
            highPrice={highPrice}
            used={used}
            chosenModel={chosenModel}
            setChosenModel={setChosenModel}
            setChosenModelPosition={setChosenModelPosition}
          />
        }
      </ModelListContainer>
    </>
  );
}

export default SearchBrand;
