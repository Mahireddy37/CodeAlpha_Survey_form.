function saveDataAndNavigate(url) {
    const formData = new FormData(document.getElementById("surveyForm"));
    for (const [key, value] of formData) {
        localStorage.setItem(key, value);
    }
    window.location.href = url;
}

// On page load, populate form fields with saved data from localStorage
document.addEventListener("DOMContentLoaded", function() {
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");
    const food = localStorage.getItem("food");
    const color = localStorage.getItem("color");

    if (name) document.getElementById("name").value = name;
    if (age) document.getElementById("age").value = age;
    if (food) document.getElementById("food").value = food;
    if (color) document.getElementById("color").value = color;
});
