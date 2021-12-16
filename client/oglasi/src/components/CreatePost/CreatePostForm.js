import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Message,
  CreatePostButton,
} from "./styles/CreatePostForm";
import { createPost } from "../../helpers/posts";
import { BrandInput, ModelInput } from "../FilterInput/FilterInput";
import { useHistory, useLocation } from "react-router-dom";
import ImageInput from "../ImageInput/ImageInput";

function CreatePostForm() {
  const history = useHistory();
  const location = useLocation();
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { brand, model } = location.state;
  console.log(brand, model);
  async function handleCreatePost() {
    const message = await createPost({
      product,
      brand,
      model,
      description,
      price,
      imageUrl,
    });
    history.push(`/post/${message}`);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submiting");
    handleCreatePost();
  }

  return (
    <>
      <FormGroup onSubmit={handleSubmit}>
        <Label htmlFor="Opis">Opis</Label>
        <Input onChange={(e) => setDescription(e.target.value)} id="Opis" />
        <Message></Message>

        <Label htmlFor="Cena">Cena</Label>
        <Input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="Cena"
        />
        <Message></Message>

        <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} />

        <CreatePostButton type="submit">Create Post</CreatePostButton>
      </FormGroup>
    </>
  );
}

export default CreatePostForm;
