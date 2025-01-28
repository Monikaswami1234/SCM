const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("drawer");

hamburger.addEventListener("click", () => {
if (drawer.style.left === "0px") {
drawer.style.left = "-100%";
} else {
drawer.style.left = "0px";
}
});

