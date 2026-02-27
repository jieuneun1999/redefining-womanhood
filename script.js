// Fade-in hero content and images
window.addEventListener("load", () => {
  const content = document.querySelector(".hero-content");
  content.style.opacity = 0;
  setTimeout(() => {
    content.style.transition = "opacity 1.5s ease-in-out";
    content.style.opacity = 1;
  }, 200);

  const imgs = document.querySelectorAll(".choice-card img");
  imgs.forEach((img, index) => {
    img.style.opacity = 0;
    setTimeout(() => {
      img.style.transition = "opacity 1s ease-in-out";
      img.style.opacity = 1;
    }, 500 + index * 200);
  });

  const buttons = document.querySelectorAll(".choice-card button");
  buttons.forEach((btn, index) => {
    btn.style.opacity = 0;
    setTimeout(() => {
      btn.style.transition = "opacity 1s ease-in-out";
      btn.style.opacity = 1;
    }, 700 + index * 200);
  });
});

// Smooth fade before redirect and record role
const roleButtons = document.querySelectorAll(".choice-card button");
roleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const role = btn.dataset.role;
    localStorage.setItem("userRole", role);

    // Fade out body before redirect
    document.body.style.transition = "opacity 1s ease-in-out";
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = "area.html";
    }, 1000); // wait for fade-out
  });
});

<script>
  // Fade-in images and titles
  window.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".area-card");

    cards.forEach((card, index) => {
      const img = card.querySelector("img");
      const title = card.querySelector(".area-card-title");

      setTimeout(() => {
        img.style.opacity = 1;
      }, 100 + index * 100);

      setTimeout(() => {
        title.style.opacity = 1;
      }, 300 + index * 100);
    });
  });

  function navigateTo(url) {
    window.location.href = url;
  }
</script>