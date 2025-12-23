document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("categorySearch");
  const labels = document.querySelectorAll("#categoryList .custom_checkbox");

  searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase().trim();

    labels.forEach(function (label) {
      const text = label.textContent.toLowerCase();

      if (text.includes(value)) {
        label.classList.remove("hide-item");
      } else {
        label.classList.add("hide-item");
      }
    });
  });

});
