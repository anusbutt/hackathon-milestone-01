// script.js

const button = document.getElementById("toggle-button") 
const skills = document.getElementById("toggle-skills")

if (button && skills) {
    button.addEventListener("click", () => {
        if (skills.style.display === "none" || skills.style.display === "") {
            skills.style.display = "block";
            button.textContent = "Hide Skills";
        } else {
            skills.style.display = "none";
            button.textContent = "See Skills";
        }
    });
} else {
    console.error("Button or skills element not found.");
}

