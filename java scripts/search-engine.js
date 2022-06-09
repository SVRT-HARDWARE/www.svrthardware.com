const searchForm = document.getElementById("searchbar-container");
const searchButton = document.getElementById("search");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = searchForm.username.value;

    if (username === "ayla")
    {
        location.href="/products/example-product.html";
        return false;
    }

    if (username === "amy"){
        location.href="/download-app.html";
        return false;
    }
    if (username === "fuck"){
        location.href="/products/example-product.html";
        return false;
    }
   
    else {
        location.href="/no-search-result.html";
    }
})