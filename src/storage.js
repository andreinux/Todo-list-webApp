import { NewProject, NewToDo } from "./toDo.js";

export function saveToStorage(projects) {
    // Guard clause: never save undefined or null to localStorage
    if (!projects) return;
    
    localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadProjects() {
    const saved = localStorage.getItem("projects");

    // Catch missing key, null, or the literal string "undefined"
    if (!saved || saved === "undefined") return [];

    try {
        const data = JSON.parse(saved);

        if (!Array.isArray(data)) return [];

        return data.map(projectData => {
            const project = new NewProject(projectData.projectName);

            (projectData.toDoArr || []).forEach(todoData => {
                const todo = new NewToDo(
                    todoData.title,
                    todoData.description,
                    todoData.date,
                    todoData.priority
                );

                if (todoData.completed !== undefined) {
                    todo.completed = todoData.completed;
                }

                project.addToDo(todo);
            });

            return project;
        });
    } catch (error) {
        console.error("Failed to parse projects from localStorage:", error);
        return [];
    }
}