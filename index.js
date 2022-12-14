const themeToggle = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
function switchTheme(e) {
  if (e.target.checked) 
  {
    document.documentElement.setAttribute("data-theme", "dark");
  } 
  else 
  {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
themeToggle.addEventListener("change", switchTheme, false);
function switchTheme(e) 
{
  if (e.target.checked) 
  {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } 
  else 
  {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
const currentTheme = localStorage.getItem("theme");
if (currentTheme) 
{
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") 
  {
    themeToggle.checked = true;
  }
}
const loader = document.querySelector(".loader");
const container = document.querySelector(".container")

window.addEventListener('load', event => {
    setTimeout(loadfunction, 1500);
});

function loadfunction() {
    loader.style.display = 'none';
    container.classList.remove('hidden');
}
