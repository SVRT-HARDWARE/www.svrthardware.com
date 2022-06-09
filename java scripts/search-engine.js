const searchForm = document.getElementById("searchbar-container");
const searchButton = document.getElementById("search");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = searchForm.username.value;

    if (username === "ayla"){
        location.href="/products/example-product.html";
    }
    if (username === "test"){
        location.href="/products/example-product.html";
    } 
    
    else {
        location.href="/fallback.html";
    }
})