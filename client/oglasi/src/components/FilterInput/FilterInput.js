import React, { useContext } from "react";
import PhoneList from "../../Contexts/phonesContext";
import { SelectBox } from "./styles/FilterInputs";

export function BrandInput({ setBrand, brand }) {
  const PhoneListContext = useContext(PhoneList);
  if (PhoneListContext.brands.data) {
    return (
      <SelectBox
        defaultValue={brand}
        onChange={(e) => {
          setBrand(e.target.value);
        }}
      >
        <option value="">Sve</option>
        {PhoneListContext.brands.data.map((item) => {
          return (
            <option
              key={item.brand_name}
              value={item.brand_name}
              detail={item.detail}
              selected={item.brand_name === PhoneListContext.currentBrand}
            >
              {item.brand_name}
            </option>
          );
        })}
      </SelectBox>
    );
  } else {
    return <></>;
  }
}

export function ModelInput({ setModel }) {
  const PhoneListContext = useContext(PhoneList);

  if (PhoneListContext.models) {
    return (
      <SelectBox
        defaultValue=""
        onChange={(e) => {
          PhoneListContext.setSelectedModel(e.target.value);
          setModel(e.target.value);
        }}
      >
        <option value="">Sve</option>
        {PhoneListContext.models.map((item) => {
          const model = item.phone_name;
          return (
            <option key={model} value={model}>
              {model}
            </option>
          );
        })}
      </SelectBox>
    );
  } else {
    return <></>;
  }
}
