//selecting dom elements for manipulation
let input = document.querySelector("input[type='text']");
let ul = document.querySelector("ul");
let container = document.querySelector("div");
let lists = document.querySelectorAll("li");
let spans = document.getElementsByClassName("icon");
let pencil = document.querySelector("#pencil");
let saveBtn = document.querySelector(".save");
let clearBtn = document.querySelector(".clear");
let tipsBtn = document.querySelector(".tipBtn");
let closeBtn = document.querySelector(".closeBtn");
let overlay = document.getElementById("overlay");

//function to delete todo if delete span is clicked.
let deleteTodo = () => {
    for (let span of spans) {
        span.addEventListener("click", () => {
            span.parentElement.parentElement.remove();
            event.stopPropagation();
        });
    }
}

//function to load todo if list is found in local storage.
let loadTodo = () => {
    if (localStorage.getItem("todoList")) {
        ul.innerHTML = localStorage.getItem("todoList");
        deleteTodo();
    }
}

//event listener for input to add new todo to the list.
input.addEventListener("keypress", function(keyPressed) {
    if (keyPressed.which === 13) {
        //creating lists and span when enter is clicked
        let li = document.createElement("li");
        let div = document.createElement("div");
        let spanElement = document.createElement("span");
        let spanElementDate = document.createElement("span");
        let icon = document.createElement("i");

        let newTodo = this.value;
        this.value = " ";

        let showTime = () => {

            let date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();

            if (day < 10) day = "0" + day;

            if (month < 10) month = "0" + month;

            if (hour < 10) hour = "0" + hour;

            if (minute < 10) minute = "0" + minute;

            if (second < 10) second = "0" + second;

            let out = day + "." + month + "." + year + ", " + hour + ":" + minute + ":" + second;

            return out;
        }

        spanElementDate.classList.add("date");
        spanElementDate.append(showTime());

        icon.classList.add("fas", "fa-trash-alt");
        spanElement.classList.add("icon");
        spanElement.append(icon);

        div.classList.add("span");
        div.append(spanElement, spanElementDate);

        ul.appendChild(li).append(div, newTodo);

        deleteTodo();

    }
});

// event listener to linethrough list if clicked
ul.addEventListener("click", ev => {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);

//hide input box, when pencil icon is clicked
pencil.addEventListener("click", () => input.classList.toggle("display"));

//save todolist state so user can access it later
saveBtn.addEventListener("click", () => localStorage.setItem("todoList", ul.innerHTML));

//clear all todo when clear button is clicked
clearBtn.addEventListener("click", () => {
    ul.innerHTML = "";
    localStorage.removeItem("todoList", ul.innerHTML);
});

//display overlay when tips btn is clicked
tipsBtn.addEventListener("click", () => overlay.style.height = "100%");

//close overlay when close btn is clicked
closeBtn.addEventListener("click", e => {
    e.preventDefault;
    overlay.style.height = "0";
});

//delete todo
deleteTodo();

//load Todo
loadTodo();