let tasks = document.querySelectorAll('.task');

let toggleBtn = document.querySelector('.toggle-mode');

tasks.forEach((task) => {
    task.addEventListener('click', expandTask);
})

toggleBtn.addEventListener('click', toggleMode);

function expandTask(e) {
    // console.log(e.currentTarget);
    if (e.currentTarget.classList.contains('task-expand')) {
        e.currentTarget.classList.remove('task-expand');
        e.currentTarget.querySelector('.task-details').style.visibility = 'hidden';
    } else {
        e.currentTarget.classList.add('task-expand');
        e.currentTarget.querySelector('.task-details').style.visibility = 'visible';
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