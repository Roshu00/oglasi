import React, { createContext, useEffect, useState } from "react";
import { getBrands, getModels } from "../helpers/getBrands";

const PhoneList = createContext();

export function PhoneListContext({ children }) {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [currentBrand, setCurrentBrand] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [loading, setLoading] = useState(true);

  function fillBrands() {
    getBrands().then((data) => {
      setBrands(data);
    });
  }

  async function fillModels(detail) {
    setModels([]);
    await getModels(detail).then((data) => {
      if (data.data) {
        setLoading(true);
        setModels(data.data.phones);
        setLoading(!data.status);
      }
    });
  }

  async function searchModels(slug) {
    fillModels("https://api-mobilespecs.azharimm.site/v2/search?query=" + slug);
  }

  async function getLatestModels() {
    fillModels("https://api-mobilespecs.azharimm.site/v2/latest");
  }

  useEffect(() => {
    fillBrands();
  }, []);

  useEffect(() => {
    fillModels(selectedBrand);
  }, [selectedBrand]);

  return (
    <PhoneList.Provider
      value={{
        brands,
        models,
        setModels,
        selectedBrand,
        selectedModel,
        setSelectedBrand,
        setSelectedModel,
        searchModels,
        currentBrand,
        setCurrentBrand,
        getLatestModels,
        loading,
      }}
    >
      {children}
    </PhoneList.Provider>
  );
}

export default PhoneList;
