const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  
  // Change button text based on theme
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "Switch to Light Theme";
  } else {
    toggleBtn.textContent = "Switch to Dark Theme";
  }

});

//preloader
window.addEventListener("load" , () => {
  const preloader = 
document.getElementById("preloader");
  preloader.classList.add("hide");
})
