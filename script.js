const toggleSwitch = document.querySelector("input[type=checkbox]");
const navBar = document.getElementById("nav");
const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");
const img3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const toggleIcon = document.querySelector(".toggle-icon");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

function toggleLightDarkMode (theme){
navBar.style.backgroundColor =(theme ===DARK_THEME)?'rgb(0 0 0 / 50%)':'rgb(255 255 255 / 50%)';
textBox.style.backgroundColor=(theme ===DARK_THEME)?'rgb(255 255 255 / 50%)':'rgb(0 0 0 / 50%)';
toggleIcon.children[0].textContent = (theme ===DARK_THEME)?'Dark Mode':'Light Mode';
(theme ===DARK_THEME) && toggleIcon.children[1].classList.replace("fa-sun","fa-moon");
!(theme ===DARK_THEME) && toggleIcon.children[1].classList.replace("fa-moon","fa-sun");
img1.src = `img/undraw_proud_coder_${theme}.svg`;
img2.src = `img/undraw_feeling_proud_${theme}.svg`;
img3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

function switchMode({target}){

    if(target.checked){
        document.documentElement.setAttribute("data-theme",DARK_THEME);
        toggleLightDarkMode(DARK_THEME);
        localStorage.setItem("theme",DARK_THEME);
    }else{
        document.documentElement.setAttribute("data-theme",LIGHT_THEME)
        toggleLightDarkMode(LIGHT_THEME);
        localStorage.setItem("theme",LIGHT_THEME);
    }
}


toggleSwitch.addEventListener("change",switchMode)

const currentTheme = localStorage.getItem("theme");
if(currentTheme){
    document.documentElement.setAttribute("data-theme",currentTheme);
    toggleLightDarkMode(currentTheme);
     toggleSwitch.checked =(currentTheme === DARK_THEME);
}