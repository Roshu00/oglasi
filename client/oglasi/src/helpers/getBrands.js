// export async function getBrands () {

//     const where = encodeURIComponent(JSON.stringify({
//         "Cell_Phone_Brand": {
//           "$exists": true
//         }
//       }));
//       const response = await fetch(
//         `https://parseapi.back4app.com/classes/Cell_Phone_Models_By_Brand?limit=1000&order=Cell_Phone_Brand&where=${where}`,
//         {
//           headers: {
//             'X-Parse-Application-Id': 'MEqvn3N742oOXsF33z6BFeezRkW8zXXh4nIwOQUT', // This is the fake app's application id
//             'X-Parse-Master-Key': 'uZ1r1iHnOQr5K4WggIibVczBZSPpWfYbSRpD6INw', // This is the fake app's readonly master key
//           }
//         }
//       );
//       const data = await response.json();
//       return data
// }

// workig but out of date make sure to find workig and up to date api for filtering brands and models
// also use phone list context for saving post to make sure that name of post and filter match

// export async function getModels (brand) {

//     const where = encodeURIComponent(JSON.stringify({
//         "Brand": brand
//       }));
//       const response = await fetch(
//         `https://parseapi.back4app.com/classes/Dataset_Cell_Phones_Model_Brand?limit=10000&order=Brand&keys=Brand,Model&where=${where}`,
//         {
//           headers: {
//             'X-Parse-Application-Id': 'MEqvn3N742oOXsF33z6BFeezRkW8zXXh4nIwOQUT', // This is the fake app's application id
//             'X-Parse-Master-Key': 'uZ1r1iHnOQr5K4WggIibVczBZSPpWfYbSRpD6INw', // This is the fake app's readonly master key
//           }
//         }
//       );
//       const data = await response.json(); // Here you have the data that you need
//       return data
// }

export async function getBrands() {
  const response = await fetch(
    `https://api-mobilespecs.azharimm.site/v2/brands`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getModels(detail) {
  const response = await fetch(`/models`, {
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
