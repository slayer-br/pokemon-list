const DARK_MODE_CLASS = "dark-mode";
const IMAGE_PATHS = {
  light: "./src/images/sun.png",
  dark: "./src/images/moon.png",
};

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const imageThemeToggle = document.querySelector(".icon-theme");

themeToggle.addEventListener("click", () => {
  body.classList.toggle(DARK_MODE_CLASS);
  const isDarkMode = body.classList.contains(DARK_MODE_CLASS);

  imageThemeToggle.src = isDarkMode ? IMAGE_PATHS.dark : IMAGE_PATHS.light;
  imageThemeToggle.alt = isDarkMode ? "moon icon" : "sun icon";
  themeToggle.setAttribute("aria-label", isDarkMode ? "Ativar modo claro" : "Ativar modo escuro");
});

