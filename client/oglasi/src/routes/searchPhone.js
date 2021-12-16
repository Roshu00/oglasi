import React from "react";
import { useParams } from "react-router";

//components
import DisplayPosts from "../components/DisplayPosts/DisplayPosts";
function SearchPhone() {
  console.log("PHONE SEARCH");
  const { brand, model, lowPrice, highPrice, used } = useParams();
  console.log(brand, model, lowPrice, highPrice, used);
  return (
    <>
      <DisplayPosts
        brand={brand}
        model={model}
        lowPrice={lowPrice}
        highPrice={highPrice}
        used={used}
      />
    </>
  );
}

export default SearchPhone;
