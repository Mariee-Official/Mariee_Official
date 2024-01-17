function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// document.querySelectorAll("[data-cursor]").forEach((item) => {
//   item.addEventListener("mouseover", (e) => {
//     if (item.dataset.cursor === "pointer") {
//       cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
//       cursorBorder.style.setProperty("--size", "30px");
//     }
//     if (item.dataset.cursor === "pointer2") {
//       cursorBorder.style.backgroundColor = "white";
//       cursorBorder.style.mixBlendMode = "difference";
//       cursorBorder.style.setProperty("--size", "80px");
//     }
//   });
//   item.addEventListener("mouseout", (e) => {
//     cursorBorder.style.backgroundColor = "unset";
//     cursorBorder.style.mixBlendMode = "unset";
//     cursorBorder.style.setProperty("--size", "50px");
//   });
// });
