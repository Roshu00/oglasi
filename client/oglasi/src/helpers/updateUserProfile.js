export async function updateUserProfile(userData) {
  const response = await fetch(`/seller/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  console.log(response);
  return data;
}
