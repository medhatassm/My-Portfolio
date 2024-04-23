let hamburgerMenu = document.querySelector(".hamburger_menu");
let sideNavbar = document.querySelector(".side_navbar");
let sNavList = document.querySelector(".side_navbar ul");
let allLinks = document.querySelectorAll("header .nav_bar ul li a");

hamburgerMenu.onclick = () => {
  switch (sideNavbar.style.width) {
    case "300px":
      sideNavbar.style.width = "";
      sNavList.style.opacity = "0";

      break;
    case "":
      sideNavbar.style.width = "300px";
      sNavList.style.opacity = "100%";

      break;
    default:
      console.log(Error("Error when change side navbar width"));
  }

  console.log(sideNavbar.style.width);
};

allLinks.forEach((e) => {
  e.addEventListener("click", () => {
    removeActiveClass();
    e.classList.add("active");
  });
});

function removeActiveClass() {
  for (let i = 0; i < allLinks.length; i++) {
    if (allLinks[i].classList.contains("active")) {
      allLinks[i].classList.remove("active");
    }
  }
}
