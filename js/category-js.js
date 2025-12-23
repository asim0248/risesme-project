document.addEventListener("keyup", function (e) {
  // Check if the event comes from our input
  if (e.target && e.target.id === "categorySearch") {
    const value = e.target.value.toLowerCase().trim();
    const labels = document.querySelectorAll("#categoryList .custom_checkbox");

    labels.forEach(label => {
      const text = label.textContent.toLowerCase();
      label.style.display = text.includes(value) ? "block" : "none";
    });

    console.log("Typed:", e.target.value);
    console.log("Labels found:", labels.length);
  }
});

document.addEventListener("keyup", function (e) {
  // Check if the event comes from our input
  if (e.target && e.target.id === "locationSearch") {
    const value = e.target.value.toLowerCase().trim();
    const labels = document.querySelectorAll("#locationList .custom_checkbox");

    labels.forEach(label => {
      const text = label.textContent.toLowerCase();
      label.style.display = text.includes(value) ? "block" : "none";
    });

    console.log("Typed:", e.target.value);
    console.log("Labels found:", labels.length);
  }
});

const listBtn = document.getElementById('listViewBtn');
    const gridBtn = document.getElementById('gridViewBtn');
    const container = document.getElementById('listingContainer');
    const items = container.querySelectorAll('.listing-item');

    listBtn.addEventListener('click', () => {
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');

      items.forEach(item => {
        item.classList.remove('col-lg-6');
        item.classList.add('col-lg-12');

        const content = item.querySelector('.listing-style1');
        content.classList.add('d-flex', 'justify-content-between', 'align-items-center');
      });
    });

    gridBtn.addEventListener('click', () => {
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');

      items.forEach(item => {
        item.classList.remove('col-lg-12');
        item.classList.add('col-lg-6');

        const content = item.querySelector('.listing-style1');
        content.classList.remove('d-flex', 'justify-content-between', 'align-items-center');
      });
    });