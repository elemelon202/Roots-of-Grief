function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => 
item.addEventListener("click", function() {
    this.classList.toggle("collapsible--expanded");
})
);

const badge = document.querySelectorAll(".tour__badge");
badge.forEach((item) => 
item.addEventListener("click", function() {
    this.classList.toggle("badge--secondary");
})
);