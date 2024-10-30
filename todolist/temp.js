function logAllCategories() {
  fetch("https://northwind.vercel.app/api/categories")
    .then((res) => res.json())
    .then((elm) =>
      elm.forEach((element) => {
        console.log(element);
      })
    );
}
function logByIdCategory(id) {
  fetch("https://northwind.vercel.app/api/categories")
    .then((res) => res.json())
    .then((elm) =>
      elm.forEach((element) => {
        if (element.id === id) {
          console.log(element);
        }
      })
    );
}
// method property needed
function deleteByIdCategory(id) {
  fetch(`https://northwind.vercel.app/api/categories/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
 // method property needed
//  headers and body added
function updateByIdCategory(id) {
  fetch(`https://northwind.vercel.app/api/categories/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "don't touch my category",
      description: "private",
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
 // method property needed
 //  headers and body added
function createOneCategory() {
  fetch("https://northwind.vercel.app/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "New Category",
      description: "new",
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

async function getAllCategories() {
  const res = await fetch("https://northwind.vercel.app/api/categories");
  const data = await res.json();
  console.log(data);
}
getAllCategories() ;