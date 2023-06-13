"use strict";

const productDropdown = document.getElementById("productDropdown");
const allDropdown = document.getElementById("allDropdown");
const categoryDropdown = document.getElementById("categoryDropdown");

window.onload = function () {
  console.log("window has loaded...");
  productDropdown.onchange = productDropdownChange;
  categoryDropdown.onchange = categoryDropdownSelected;
  allDropdown.onchange = allDropdownChange; 

  hideCategoryDropdown();
  hideAllProductsDropdown();
};

function productDropdownChange() {
  console.log("inside of productDropdown...");
  if (productDropdown.value === "category") {
    showCategoryDropdown();
    hideAllProductsDropdown();
  } else if (productDropdown.value === "view-all") {
    showAllProductsDropdown();
    hideCategoryDropdown();
  } else {
    hideCategoryDropdown();
    hideAllProductsDropdown();
  }
}

function categoryDropdownSelected() {
  let initialOption = new Option(""); 
  categoryDropdown.appendChild(initialOption); 

  console.log("inside of dropdown...")
  fetch("http://localhost:8081/api/categories")
    .then((response) => response.json())
    .then((categories) => {
      for (let category of categories) {
        let opt = document.createElement("option");
        opt.textContent = category.name;
        opt.value = category.categoryId; 
        categoryDropdown.appendChild(opt);
      }
    });
}

function allDropdownChange() {
  allDropdown.innerHTML = ""; 
  console.log("inside of dropdown..")
  fetch("http://localhost:8081/api/products")
    .then((response) => response.json())
    .then((products) => {
      for (let product of products) {
        let opt = document.createElement("option"); 
        opt.textContent = product.productName;
        opt.value = product.productId;
        allDropdown.appendChild(opt);
      }
    });
}

function hideCategoryDropdown() {
  categoryDropdown.style.display = "none";
}

function showCategoryDropdown() {
  categoryDropdown.style.display = "block";
}

function hideAllProductsDropdown() {
  allDropdown.style.display = "none";
}

function showAllProductsDropdown() {
  allDropdown.style.display = "block";
}

