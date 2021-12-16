export async function queryPosts(data) {
  console.log(data);
  const response = await fetch(`http://localhost:3001/posts/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const posts = await response.json();

  return posts;
}

export async function getPost(id) {
  const response = await fetch(`/post/${id}`);
  const post = await response.json();
  return post[0];
}

export async function getProfile({ id }) {
  console.log(id);
  const response = await fetch(`/seller/getprofile/${id}`);
  const profile = await response.json();
  return profile;
}

export async function getPosts({ brand, model, lowPrice, highPrice, used }) {
  const response = await fetch(
    `/search/${brand}/${model}/${lowPrice}/${highPrice}/${used}`
  );
  const posts = await response.json();
  console.log(posts);
  return posts;
}

export async function getChosenModel(detail) {
  const response = await fetch(`/modelInfo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ detail }),
  });
  const data = await response.json();
  console.log(data);
  return data;
}
