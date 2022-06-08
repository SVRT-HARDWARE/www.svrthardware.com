const searchInput = document.getElementById("search-container");
const searchButton = document.getElementById("search");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const usersearch = searchInput.usersearch.value;

    if (usersearch === "ayla" ) {
        window.open('/products/example-product.html',);
        return false;
    } 
    
    else {
        window.open('');
        return false;
    }
})