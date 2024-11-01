import * as Interface from "./interface.js";
// obj = {
//     name: "New Product",
//     price: 199.99,
//     description: "This is a new product."
// }
// createProduct(obj);
const table = document.createElement("table");
async function createTable() {
  const tbody = document.querySelector("tbody");
  let data = await Interface.getAll();
  data.forEach((element) => {
    const row = document.createElement("tr");
    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const priceCell = document.createElement("td");
    const descriptionCell = document.createElement("td");
    const createdAtCell = document.createElement("td");
    const modifyCell = document.createElement("td");
    idCell.textContent = element.id;
    nameCell.textContent = element.name;
    priceCell.textContent = element.price;
    descriptionCell.textContent = element.description;
    createdAtCell.textContent = element.created_at;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    const updateButton = document.createElement("button");
    updateButton.textContent = "U";
    deleteButton.addEventListener("click", async () => {
      await Interface.deleteByID(element.id);
      tbody.innerHTML = "";
      createTable();
      return;
    });
    updateButton.addEventListener("click", async () => {
      window.location.href = "./AdminUpdatePage.html#" + element.id;
    });
    nameCell.addEventListener("click", async () => {
      window.location.href = "./DetailPage.html#" + element.id;
    });
    modifyCell.appendChild(deleteButton);
    modifyCell.appendChild(updateButton);
    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(descriptionCell);
    row.appendChild(createdAtCell);
    row.appendChild(modifyCell);
    tbody.appendChild(row);
  });
}
createTable();
