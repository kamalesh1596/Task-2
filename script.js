// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    if (name === "" || email === "" || message === "") {
        error.textContent = "All fields are required!";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        error.textContent = "Enter a valid email address!";
        return;
    }

    error.style.color = "green";
    error.textContent = "Form submitted successfully!";
});

// To-Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="this.parentElement.remove()">X</button>`;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}