export async function createPost(data) {
  const response = await fetch(`/post/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  const message = await response.json();
  return message;
}
