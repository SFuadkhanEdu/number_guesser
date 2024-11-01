import * as Interface from "./interface.js";

const product_name = document.querySelector("#product_name");
const product_price = document.querySelector("#product_price");
const product_description = document.querySelector("#product_description");
const product_created_at = document.querySelector("#product_created_at");
const submit = document.querySelector("form");

submit.addEventListener("submit", async (e) => {
  e.preventDefault();
  const obj = {
    name: product_name.value,
    price: parseFloat(product_price.value),
    description: product_description.value,
    created_at: product_created_at.value ?? new Date(),
  };
  Interface.createProduct(obj);
});
