import React, { useEffect, useState, useContext } from "react";
import PostList from "../../Contexts/postContext";
import Post from "../Post/post";
import dateFormat from "dateformat";

function DisplayPosts({ status, chosenModelInfo }) {
  const PostListContext = useContext(PostList);
  useEffect(() => {
    if (status) {
      const brand = chosenModelInfo.brand;
      const model = chosenModelInfo.phone_name;
      const lowPrice = 0;
      const highPrice = 10000;
      const used = false;
      PostListContext.getSearchPosts({
        brand,
        model,
        lowPrice,
        highPrice,
        used,
      });
    }
  }, [status]);
  console.log(PostListContext.data);
  if (status) {
    return (
      <Post.Container>
        {PostListContext.data.map((post) => {
          return (
            <Post.Card to={`/post/${post.postId}`} key={post.postId}>
              <Post.Image imagePath={post.imagesPath} />
              <Post.InfoContainer>
                <Post.Title used={post.used}>
                  {post.brand + " " + post.model}
                </Post.Title>
                <Post.Description>{post.description}</Post.Description>
                <Post.Footer>
                  <Post.SmallInfo>
                    <Post.Seller>{post.sellers.username}</Post.Seller>
                    <Post.Date>
                      {dateFormat(post.created_at, "dddd, mmmm dS, yyyy")}
                    </Post.Date>
                  </Post.SmallInfo>
                  <Post.Price>{post.price}</Post.Price>
                </Post.Footer>
              </Post.InfoContainer>
            </Post.Card>
          );
        })}
      </Post.Container>
    );
  } else {
    return <h1>POSTS</h1>;
  }
}

export default DisplayPosts;
