console.log("it works");

let navbar = document.querySelector(".navbar");

if (document.documentElement.clientWidth < 991) {
  navbar.classList.add("scroll");
}

document.addEventListener("scroll", () => {
  if (window.top.scrollY > 0) {
    console.log("A");
    navbar.classList.add("scroll");
  } else {
    if (document.documentElement.clientWidth > 991) {
      navbar.classList.remove("scroll");
    }
  }
});

window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth < 991) {
    console.log("d");
    navbar.classList.add("scroll");
  } else {
    if (window.scrollY == 0) {
      navbar.classList.remove("scroll");
      console.log("scroll removed");
    } else {
      console.log(window.top.scrollTop);
    }
  }
});

document.addEventListener("scroll", () => {
  const vertical = window.scrollY; // Getting vertical scrollbar position
  const horizontal = window.scrollX; // Getting horizontal scrollbar position

  console.log(`Vertical scrollbar Position of a page: ${vertical}`);
  console.log(`Horizontal scrollbar Position of a page: ${horizontal}`);
});

// TOAST NOTIFY
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
