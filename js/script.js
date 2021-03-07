let poems = document.querySelectorAll(".flex-item");

const randColor = () => {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
};

poems.forEach((poem) => {
  poem.addEventListener("mouseover", (e) => {
    console.log(e);
    poem.style.outline = "1px solid white";
  });

  poem.addEventListener("mouseleave", () => {
    poem.style.outline = "";
  });

  poem.addEventListener("click", () => {
    if (poem.style.backgroundColor) {
      poem.style.backgroundColor = "";
    } else {
      poem.style.backgroundColor = `#${randColor()}`;
    }
  });
});
