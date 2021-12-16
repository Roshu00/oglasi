export async function createProfile(userInfo) {
  const response = await fetch(`http://localhost:3001/login/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  const data = await response.json();
  console.log(response);
  return data;
}
