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