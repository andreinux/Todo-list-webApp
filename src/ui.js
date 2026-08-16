    import "./ui.css";
    import {TaskManager} from "./taskManager.js";
    import {Card} from "./card.js";
    import {saveToStorage} from "./storage.js";
    import {allProjects} from "./state.js";
    const taskManager = new TaskManager();
    
    
    export function renderTasks(project, container){

        container.innerHTML = "";

        for(const task of project.toDoArr){
            let taskItem = document.createElement("div");
            taskItem.classList.add ("taskItem");

            const title = document.createElement("h4");
             title.textContent = task.title;

             const description = document.createElement("p");
           

             const deadline = document.createElement("p");
        

             const priority = document.createElement("p");
             priority.textContent = `Priority Level: ${task.priority}`;
             const finishBtn = document.createElement("button");
             finishBtn.style.color="red";
             finishBtn.textContent = "Finished";

             const viewTaskBtn = document.createElement("button");
             viewTaskBtn.textContent = "View Full Details";
             viewTaskBtn.classList.add("viewTaskBtn");


             finishBtn.addEventListener("click", ()=> { 
                
                taskManager.deleteTask(project, task);
                 saveToStorage(allProjects);
                renderTasks(project, container);
             })
             
//---------------------------
    taskItem.append(title);
     description.textContent = task.description
    ? `Description: ${task.description}`
    : "";

deadline.textContent = task.date
    ? `Deadline: ${task.date}`
    : "";

priority.textContent = task.priority
    ? `Priority Level: ${task.priority}`
    : "";

taskItem.append(
    title,
    description,
    deadline,
    priority,
    viewTaskBtn,
    finishBtn
);
//-----------------------
    container.append(taskItem);
        }
    }

    export function renderProjects (allProjects){
        const projectsContainer = document.querySelector("#projects-container");
        for (const project of allProjects){
             const card = new Card();
             const projectCard = card.makeProjectCard(project);

        projectsContainer.append(projectCard);
        }
    }

    export function renderProjectBtns (allProjects){
        for(const project of allProjects){
            let projectBtn = document.createElement("button");
            projectBtn.classList.add("projectBtn");
            projectBtn.textContent = project.projectName;

            const projectBtnContainer = document.querySelector("#projectBtnContainer")
            projectBtnContainer.append(projectBtn);

            projectBtn.addEventListener("click", ()=> {
                loadProject(project);   
            })
        }
    }
    
    
    function loadProject(project) {
    const card = new Card();

    const projectCard = card.makeProjectCard(project);

    const projectsContainer =
        document.querySelector("#projects-container");

    projectsContainer.innerHTML = "";

    projectsContainer.append(projectCard);

    const tasksContainer =
        projectCard.querySelector(".tasks-container");

    renderTasks(project, tasksContainer);
}