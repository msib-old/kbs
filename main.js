import "./assets/css/variables.css";
import "./assets/fonts/SegoeUI/stylesheet.css";
import "./assets/css/base.css";
import "./assets/css/layouts/index.css";
import "./assets/css/layouts/topMenu.css";
import "./assets/css/layouts/leftMenu.css";
import "./assets/css/layouts/tabs.css";
import "./assets/css/layouts/controls.css";
import "./assets/css/layouts/content.css";

// disabled links
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const tabsLogic = () => {
  const rootEl = document.querySelector("#tabs");
  const closeEl = rootEl.querySelector("#tabs-close");
  const changeEl = rootEl.querySelector("#tabs-change");
  const openEl = rootEl.querySelector("#tabs-open");
  const statusClasses = ["open", "short"];

  closeEl.addEventListener("click", () => {
    if (rootEl.classList.contains(statusClasses[1])) {
      changeStatusClass(null, statusClasses);
    } else {
      changeStatusClass(statusClasses[1], statusClasses);
    }
  });
  changeEl.addEventListener("click", () => {
    changeStatusClass(statusClasses[0], statusClasses);
  });
  openEl.addEventListener("click", () => {
    changeStatusClass(statusClasses[0], statusClasses);
  });

  function changeStatusClass(targetClass, classArray) {
    classArray.map((className) => {
      if (className === targetClass) {
        rootEl.classList.add(className);
      } else {
        rootEl.classList.remove(className);
      }
    });
  }
};
tabsLogic();

// auth
function auth() {
  const rootEl = document.querySelector(".left-menu")
  const arr = [];
  arr.push(rootEl.querySelector("#login"));
  arr.push(rootEl.querySelector("#logout"));
  arr.forEach((element) => {
    element.addEventListener("click", () => {
      login.classList.toggle("hidden");
      logout.classList.toggle("hidden");
    });
  });
}
auth();

// accordion
function accordion() {
  const list = document.querySelectorAll(".accordion");
  if (list) {
    list.forEach((element) => {
      element
        .querySelector(".accordion__button")
        .addEventListener("click", () => {
          element.classList.toggle("accordion--open");
        });
    });
  }
}
accordion();
