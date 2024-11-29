export const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      console.log("Menu Toggled :", nav.classList.contains("show"));
    });
  }
};

export const scrollActive = () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        `.nav__menu a[href*=${sectionId}]`
      );

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    }
  });
};

export const toggleDarkMode = () => {
  const body = document.body;
  const iconMoon = document.getElementById("icon-moon");
  const iconSun = document.getElementById("icon-sun");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    iconMoon.style.display = "none";
    iconSun.style.display = "block";
  } else {
    localStorage.setItem("theme", "light");
    iconMoon.style.display = "block";
    iconSun.style.display = "none";
  }
};

export const initializeDarkModeIcons = () => {
  const body = document.body;
  const iconMoon = document.getElementById("icon-moon");
  const iconSun = document.getElementById("icon-sun");

  if (body.classList.contains("dark-mode")) {
    iconMoon.style.display = "none";
    iconSun.style.display = "block";
  } else {
    iconMoon.style.display = "block";
    iconSun.style.display = "none";
  }
};

export const init = () => {
  showMenu("nav-toggle", "nav-menu");
  window.addEventListener("scroll", scrollActive);

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  const hour = new Date().getHours();
  if (hour >= 18 || hour <= 6) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }

  initializeDarkModeIcons();
};
