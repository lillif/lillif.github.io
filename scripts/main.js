const NAVBUTTON = document.querySelector(".nav-btn");
const PHOTOS = document.getElementsByClassName("photo");

//adjust navbar when window is resized
window.addEventListener("resize", navAdjust, false);

if (window.innerWidth < 700) {
  navAdjust();
}

function navAdjust() {
  /* if less than 700px wide, collapse */
  let myNav = document.getElementById("mynav");
  let navButton = document.getElementById("mynavbutton");
  let myList = document.getElementById("mynavlist");
  let myLinks = document.getElementsByClassName("nav_link");
  if (window.innerWidth < 700) {
    /* collapse */
    /* if nav bar contains class small don't do anything, otherwise add */
    if (!myNav.classList.contains("collapsed_nav")) {
      myNav.classList.add("collapsed_nav");
      myList.classList.add("collapsed_list");
      for (let item of myLinks) {
        item.classList.add("collapsed_link");
      }
      navButton.classList.remove("hide");
    }
  } else {
    /* expand */
    if (myNav.classList.contains("collapsed_nav")) {
      myNav.classList.remove("collapsed_nav");

      myList.classList.remove("collapsed_list");

      for (let item of myLinks) {
        item.classList.remove("collapsed_link");
      }
      navButton.classList.add("hide");
    }
  }
}

//photos

//change opacity when focused on photo
for (let photo of PHOTOS) {
  photo.addEventListener(
    "mouseenter",
    function() {
      fullOpacity(this);
    },
    false
  );
  photo.addEventListener(
    "mouseleave",
    function() {
      reduceOpacity(this);
    },
    false
  );
}

function fullOpacity(e) {
  e.classList.remove("blurredPic");
  e.classList.add("focusedPic");
  console.log("added focus to" + e);
}

function reduceOpacity(e) {
  e.classList.remove("focusedPic");
  e.classList.add("blurredPic");
}
