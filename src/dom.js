import Task from './tasks'

let taskExample1 = new Task("Task Name", "Lorem Ipsum", "School", "02/06/2022");
let taskExample2 = new Task("Task Name", "Lorem Ipsum", "School", "02/06/2022");
let taskExample3 = new Task("Task Name", "Lorem Ipsum", "Work", "02/06/2022");
let taskList = [];
taskList.push(taskExample1, taskExample2, taskExample3);

(function renderPage() {
    let body = document.querySelector("body");
    
    let header = document.querySelector("header");
    let pageTitle = document.createElement("h3");
    let toggleContainer = document.createElement("div");
    let toggleIndicator = document.createElement("i");

    pageTitle.textContent = "My To-Do List";
    toggleContainer.classList.add("toggle-mode");
    toggleIndicator.classList.add("toggle-btn");
    toggleContainer.append(toggleIndicator);
    header.append(pageTitle, toggleContainer);

    let right = document.createElement("div");
    let rightTitle = document.createElement("h1");
    let taskContainer = document.createElement("div");
    
    rightTitle.textContent = "Task List";
    right.classList.add("right");
    taskContainer.classList.add("task-container");
})()


function renderTask(task) {
    let taskDiv = document.createElement("div");
    let taskCategory = document.createElement("div");
    let taskInformationContainer = document.createElement("div");
    let taskHeader = document.createElement("div");
    let taskTitle = document.createElement("p");
    let taskDate = document.createElement("p");
    let iconsContainer = document.createElement("div");
    let checkBtn = document.createElement("img");
    let deleteBtn = document.createElement("img");
    let detailsContainer = document.createElement("div");
    let details = document.createElement("p");

    taskDiv.classList.add("task");
    taskCategory.classList.add("task-category", "cat-grow");
    taskInformationContainer.classList.add("task-information");
    taskHeader.classList.add("task-title");
    iconsContainer.classList.add("icons");
    detailsContainer.classList.add("task-details", "details-visible");
    checkBtn.id = "complete";
    deleteBtn.id = "delete";t
    
    askTitle.textContent = task.name;
    taskDate.textContent = task.date;
    details.textContent = task.description;
    checkBtn.src = "../images/check.png";
    deleteBtn.src = "../images/x.png";
    
    iconsContainer.append(checkBtn, deleteBtn);
    taskHeader.append(taskTitle, taskDate, iconsContainer);
    detailsContainer.append(details);
    taskInformationContainer.append(taskCategory, taskHeader, detailsContainer);
    taskDiv.append(taskInformationContainer);

    return taskDiv
}

function renderProject(projectDiv) {
    return project
}

