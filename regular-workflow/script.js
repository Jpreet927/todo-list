let tasks = document.querySelectorAll('.task');

let toggleBtn = document.querySelector('.toggle-mode');

tasks.forEach((task) => {
    task.addEventListener('click', expandTask);
})

toggleBtn.addEventListener('click', toggleMode);

function expandTask(e) {
    console.log(e.target);
    if (e.target.type !== "img"){
        if (e.currentTarget.classList.contains('task-expand')) {
            e.currentTarget.classList.remove('task-expand');
            e.currentTarget.querySelector('.task-details').style.visibility = 'hidden';
        } else {
            e.currentTarget.classList.add('task-expand');
            e.currentTarget.querySelector('.task-details').style.visibility = 'visible';
        }
    }
}

function toggleMode(e) {
    let header = document.querySelector('header');
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let tasks = document.querySelectorAll('.task-information');

    e.currentTarget.classList.toggle('toggle-active');
    header.classList.toggle('header-light');
    left.classList.toggle('left-light');
    right.classList.toggle('right-light');
    tasks.forEach((task) => {
        task.classList.toggle('task-light');
    })
}

//PROJECT FORM
let projectModal = document.querySelector(".project-modal");
let projectForm = document.getElementById("project-form");
let projectNameForm = document.getElementById("project-name");
let projectSubmitBtn = document.getElementById("project-submit");
let projectFormDelete = document.querySelector(".project-form-close");
let projectAdd = document.querySelector(".new-project");

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (projectNameForm.value.trim() !== "") {
        let projectNameInput = projectNameForm.value.trim();
        let projectColour = generateColour();
        createProject(projectNameInput, projectColour);
    }
})

projectAdd.addEventListener('click', () => {
    projectModal.style.visibility = 'visible';
})

projectFormDelete.addEventListener('click', () => {
    projectModal.style.visibility = 'hidden';
})

// TASK FORM
let taskForm = document.getElementById("task-form");
let taskName = document.getElementById("form-task-name");
let taskDescription = document.getElementById("form-task-description");
let projectName = document.getElementById("project-name");
let dateSelect = document.getElementById("date-select");
let submitBtn = document.getElementById("task-submit");

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        let taskNameInput = taskName.value.trim();
        let taskDescInput = taskDescription.value.trim();
        let projectInput = projectName.options[projectName.selectedIndex].value;
        let taskDateInput = dateSelect.value;
        createTask(taskNameInput, taskDescInput, projectInput, taskDateInput);
    };
})

function validateForm() {
    let taskNameInput = taskName.value.trim();
    let taskDescInput = taskDescription.value.trim();
    
    if (taskNameInput === '') {
        if (taskName.parentElement.classList.contains('success')){
            taskName.parentElement.classList.remove('success');
        }
        taskName.parentElement.classList.add('error');
    } else {
        if (taskName.parentElement.classList.contains('error')){
            taskName.parentElement.classList.remove('error');
        }
        taskName.parentElement.classList.add('success')
    }

    if (taskDescInput === '') {
        if (taskDescription.parentElement.classList.contains('success')){
            taskDescription.parentElement.classList.remove('success');
        }
        taskDescription.parentElement.classList.add('error');
    } else {
        if (taskDescription.parentElement.classList.contains('error')){
            taskDescription.parentElement.classList.remove('error');
        }
        taskDescription.parentElement.classList.add('success')
    }

    if (taskNameInput !== '' && taskDescInput !== '') {
        return true
    }
}


// TASK CREATION SECTION
// create task -> add to list -> generate

let addTaskBtn = document.querySelector('.new-task');
let formModal = document.querySelector('.modal');
addTaskBtn.addEventListener('click', () => {
    formModal.style.visibility = 'visible';
})

let formClose = document.querySelector('.form-close');
formClose.addEventListener('click', () => {
    formModal.style.visibility = 'hidden';
})

// task class
const task = (() => {
    let taskList = [];  

    class Task {
        constructor(name, description, project, date) {
            this.name = name;
            this.description = description;
            this.project = project;
            this.date = date;
        }
    }

    function createTask(name, description, project, date) {
        let newTask = new Task(name, description, project, date);
        taskList.push(newTask);
        // render task in DOM -> gonna have to ref project object to get the colour
        // implement delete and complete
    }

    function deleteTask(e) {
        // e.currentTarget.parentElement.parentElement.parentElement.parentElement
    }
})


// PROJECT CREATION SECTION
// add project -> add project to form list

const projects = (() => {
    let projectList = [];

    class Project {
        constructor(name, colour) {
            this.name = name;
            this.colour = colour;
        }
    }

    // takes project name from input and colour from function
    function createProject(name, colour) {
        let newProject = new Project(name, colour);
        projectList.push(newProject);
        // render in sidebar DOM
    }
})

