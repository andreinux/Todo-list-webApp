import {NewProject, NewToDo} from "./toDo.js";



export function saveToStorage (projects){
    localStorage.setItem("projects",JSON.stringify(projects));
}


export function loadProjects() {
    const saved = localStorage.getItem("projects");

    if (!saved) return [];

    const data = JSON.parse(saved);

    return data.map(projectData => {
        const project = new NewProject(projectData.projectName);

        projectData.toDoArr.forEach(todoData => {
            const todo = new NewToDo(
                todoData.title,
                todoData.description
            );

            project.addToDo(todo);
        });

        return project;
    });
}