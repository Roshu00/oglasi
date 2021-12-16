import React, { createContext, useState } from "react";
import { getPosts, queryPosts } from "../helpers/getData";

const PostList = createContext();

export function PostListContext({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function applyFilters(data) {
    queryPosts(data).then((posts) => {
      setLoading(true);
      setData(posts);
      setLoading(false);
    });
  }

  function getSearchPosts(data) {
    getPosts(data).then((posts) => {
      setLoading(true);
      setData(posts);
      console.log(data);
      setLoading(false);
    });
  }

  return (
    <PostList.Provider value={{ data, loading, applyFilters, getSearchPosts }}>
      {children}
    </PostList.Provider>
  );
}

export default PostList;
