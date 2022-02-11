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