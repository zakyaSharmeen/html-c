
 

const filterContainer = document.querySelector(".gallery-filter"),
      galleryItems = document.querySelectorAll(".gallery-item");

// Log the gallery items to ensure they are correctly selected
console.log(galleryItems);

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        // Deactivate the existing active class
        filterContainer.querySelector(".active").classList.remove("active");
        // Activate the clicked filter item
        event.target.classList.add("active");

        const filterValue = event.target.getAttribute("data-filter");

        // Iterate over each gallery item
        galleryItems.forEach((item) => {
            // Check if the item should be shown
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});
