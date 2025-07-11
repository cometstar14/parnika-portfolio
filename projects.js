document.addEventListener("DOMContentLoaded", () => {
  const allProjects = document.querySelectorAll(".project-card");

  allProjects.forEach((card) => {
    const images = card.querySelectorAll(".project-img");
    const prevBtn = card.querySelector(".carousel-btn.prev");
    const nextBtn = card.querySelector(".carousel-btn.next");
    let index = 0;

    const updateImages = () => {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    };

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      updateImages();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateImages();
    });
  });
});
