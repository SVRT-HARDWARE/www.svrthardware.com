const searchForm = document.getElementById("searchbar-container");
const searchButton = document.getElementById("search");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = searchForm.username.value;

    if (username === "ayla" , "Ayla") {
        window.open('/products/example-product.html');
        return false;
    } 
    
    else {
        window.open('fallback.html');
        return false;
    }
})