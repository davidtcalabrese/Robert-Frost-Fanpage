let poems = document.querySelectorAll(".flex-item");

poems.forEach((poem) => {
  poem.addEventListener("mouseover", (e) => {
    console.log(e);
    poem.style.outline = "1px solid white";
  });

  poem.addEventListener("mouseleave", () => {
      poem.style.outline = ""
  })
});
