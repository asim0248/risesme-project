
     const stars = document.querySelectorAll(".star");
  let selectedRating = 0;

  stars.forEach(star => {
    // Hover effect
    star.addEventListener("mouseover", () => {
      const value = star.dataset.value;
      fillStars(value);
    });

    // Remove hover (restore selected)
    star.addEventListener("mouseout", () => {
      fillStars(selectedRating);
    });

    // Click to select
    star.addEventListener("click", () => {
      selectedRating = star.dataset.value;
      fillStars(selectedRating);
      document.getElementById("rating-value").innerText =
        `You rated: ${selectedRating} star(s)`;
    });
  });

  function fillStars(value) {
    stars.forEach(star => {
      star.classList.toggle(
        "filled",
        star.dataset.value <= value
      );
    });
  }
