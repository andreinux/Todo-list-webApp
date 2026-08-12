    
    
    
    export function renderTasks(project, container){

        container.innerHTML = "";

        for(const task of project.toDoArr){
            let taskItem = document.createElement("div");

            const title = document.createElement("h4");
             title.textContent = task.title;

             const description = document.createElement("p");
             description.textContent = task.description;

    taskItem.append(title, description);
    container.append(taskItem);
        }
    }