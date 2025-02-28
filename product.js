document.addEventListener("DOMContentLoaded", function () {
    const categoryTabs = document.querySelectorAll(".product_selector p");
    const products = document.querySelectorAll(".product_images");

    categoryTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const category = this.textContent.trim().toLowerCase().replace(/\s/g, "-");

            products.forEach(product => {
                const productCategory = product.getAttribute("data-category");
                if (category === "all") {
                    product.style.display = "block";
                }
                else if(productCategory === category) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});

// Function to store product details in localStorage
function storeProductDetails(name, price, imageUrl) {
    localStorage.setItem('productName', name);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productImage', imageUrl);
}

// Add event listeners to all 'Read More' buttons
document.querySelectorAll('.read-more').forEach((button) => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product_images'); // Get the closest product card
        const productName = productCard.querySelector('.card-description h4').textContent; // Get the product name
        const productPrice = productCard.querySelector('.card-description p').textContent; // Get the product price
        const productImage = productCard.querySelector('img').src; // Get the product image source
        
        // Store product details in localStorage
        storeProductDetails(productName, productPrice, productImage);
    });
});
