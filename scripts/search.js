
"use strict";

const productDropdown = document.getElementById("productDropdown");
const allDropdown = document.getElementById("allDropdown");
const categoryDropdown = document.getElementById("categoryDropdown");

window.onload = function () {
  console.log("window has loaded...");
  productDropdown.onchange = productDropdownChange;
  categoryDropdown.onchange = categoryDropdownSelected;

  hideCategoryDropdown();
  hideAllProductsDropdown();
};

function productDropdownChange() {
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
    let element = document.getElementById("categoryDropdown");
    fetch("http://localhost:8081/api/categories")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          let category = document.createElement("option");
          category.textContent = data[i].name;
          category.value = data[i].name;
          element.appendChild(category);
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
