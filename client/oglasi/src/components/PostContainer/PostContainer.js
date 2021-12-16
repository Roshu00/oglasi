import React, { Component } from "react";
import Post from "../Post/post";
import dateFormat from "dateformat";
import PostList from "../../Contexts/postContext";

class postContainer extends Component {
  render() {
    return (
      <Post.Container>
        {this.context.data.map((post) => {
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
  }
}

postContainer.contextType = PostList;

export default postContainer;
