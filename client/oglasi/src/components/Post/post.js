import React from "react";
import {
  Card,
  PostCard,
  Title,
  Container,
  ImageComp,
  Descrtiption,
  InfoContainer,
  Footer,
  Price,
  Date,
  Seller,
  SmallInfo,
  Image1,
} from "./style/post";

export default function Post({ children, ...restProps }) {
  return <PostCard {...restProps}>{children}</PostCard>;
}

Post.Card = function PostsCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Post.Title = function postTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Post.Container = function postContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Post.Image = function postImage({ children, imagePath, ...restProps }) {
  if (imagePath) {
    return (
      <Image1
        cloudName="oglasi"
        publicId={imagePath}
        width="200px"
        height="200px"
      />
    );
  } else {
    return <ImageComp />;
  }
};

Post.Description = function postDescription({ children, ...restProps }) {
  return <Descrtiption {...restProps}>{children}</Descrtiption>;
};

Post.InfoContainer = function postInfoContainer({ children, ...restProps }) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};

Post.Footer = function postFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
};

Post.Price = function postPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};

Post.Date = function postDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
};

Post.Seller = function postSeller({ children, ...restProps }) {
  return <Seller {...restProps}>{children}</Seller>;
};

Post.SmallInfo = function postSmallInfo({ children, ...restProps }) {
  return <SmallInfo {...restProps}>{children}</SmallInfo>;
};
