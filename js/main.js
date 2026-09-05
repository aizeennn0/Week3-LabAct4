import { products } from "./products.js";

import {
    searchProducts,
    filterProductsByCategory
} from "./inventoryUtils.js";

import {
    displayProducts,
    displaySummary
} from "./display.js";


const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const searchBtn =
    document.getElementById("searchBtn");

const resetBtn =
    document.getElementById("resetBtn");


function updateDisplay() {

    const query =
        searchInput.value.trim();

    const category =
        categoryFilter.value;


    let filteredProducts = products;


    // Search by product name
    if (query !== "") {

        filteredProducts =
            searchProducts(
                filteredProducts,
                query
            );

    }


    // Filter by category
    filteredProducts =
        filterProductsByCategory(
            filteredProducts,
            category
        );


    displayProducts(filteredProducts);

    displaySummary(filteredProducts);

}


// Search button
searchBtn.addEventListener(
    "click",
    updateDisplay
);


// Reset button
resetBtn.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        categoryFilter.value = "All";

        displayProducts(products);

        displaySummary(products);

    }
);


// Category filter
categoryFilter.addEventListener(
    "change",
    updateDisplay
);


// Initial page load
displayProducts(products);

displaySummary(products);
