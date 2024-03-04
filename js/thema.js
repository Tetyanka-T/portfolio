const refs = {
  checkbox: document.querySelector("#theme-switch-toggle"),
  body: document.querySelector("body"),
};
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

currentCheckTheme();
checkboxPosition();

refs.checkbox.addEventListener("change", onBlackWhite);

function onBlackWhite(e) {
  if (e.target.checked) {
    localStorage.setItem("theme", Theme.DARK);
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem("theme", Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  }
}

function checkboxPosition() {
  const checkTheme = localStorage.getItem("theme");

  if (checkTheme === Theme.DARK) {
    refs.checkbox.checked = true;
  }
}

function currentCheckTheme() {
  const checkTheme = localStorage.getItem("theme");

  if (!checkTheme) {
    localStorage.setItem("theme", Theme.LIGHT);
    refs.body.classList.add(Theme.LIGHT);
  } else {
    refs.body.classList.add(checkTheme);
  }
}
