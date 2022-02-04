let tasks = document.querySelectorAll('.task');

tasks.forEach((task) => {
    task.addEventListener('click', expandTask);
})

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