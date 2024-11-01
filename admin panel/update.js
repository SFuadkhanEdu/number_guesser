import * as Interface from "./interface.js";

const product_name = document.querySelector("#product_name");
const product_price = document.querySelector("#product_price");
const product_description = document.querySelector("#product_description");
const product_created_at = document.querySelector("#product_created_at");
const submit = document.querySelector("form");

async function fillForm(params) {
  const id = window.location.hash.slice(1);
  const product = await Interface.getByID(id);
  console.log(product);

  product_name.value = product.name;
  product_price.value = product.price;
  product_description.value = product.description;
  product_created_at.value = new Date(product.created_at)
    .toISOString()
    .slice(0, 19)
    .replace("T", "");
}

fillForm();

submit.addEventListener("submit", async (e) => {
  e.preventDefault();
  const obj = {
    name: product_name.value ?? product.name,
    price: parseFloat(product_price.value) ?? product.price,
    description: product_description.value ?? product.description,
    created_at: product_created_at.value ?? product.created_at,
  };
  Interface.updateByID(id, obj);
});
