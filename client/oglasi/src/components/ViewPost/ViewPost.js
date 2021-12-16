import React, { useEffect, useState } from "react";
import { getPost } from "../../helpers/getData";

//styles
import {
  PostSection,
  PostTitle,
  PostContainer,
  PostImages,
  Description,
  TitleContainer,
  SellerInfo,
  SellerPhoto,
  SellerItem,
  SellerButton,
} from "./styles/ViewPost";

function ViewPost({ id }) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    getPost(id).then((data) => {
      console.log(data);
      setPost(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <PostSection>
        <TitleContainer>
          <PostContainer>
            <PostTitle used={post.used}>
              {post.brand + " " + post.model}
            </PostTitle>
            <PostImages cloudName="oglasi" publicId={post.imagesPath} />
          </PostContainer>
          <SellerInfo>
            <SellerPhoto cloudName="oglasi" publicId={post.sellers.image_url} />
            <SellerItem prefix={"Ime:"}>{post.sellers.name}</SellerItem>
            <SellerItem prefix={"Prezime:"}>
              {post.sellers.last_name}
            </SellerItem>
            <SellerItem prefix={"adresa:"}>{post.sellers.address}</SellerItem>
            <SellerItem prefix={"Broj Telefona:"}>
              {post.sellers.phone_number}
            </SellerItem>
            <SellerItem prefix={"Rating:"}>{post.sellers.rating}</SellerItem>
            <SellerButton to={`/viewprofile/${post.sellers.id}`}>
              Pogledaj profil
            </SellerButton>
          </SellerInfo>
        </TitleContainer>
        <Description>{post.description}</Description>
      </PostSection>
    );
  }
}

export default ViewPost;
