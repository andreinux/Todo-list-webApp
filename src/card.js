import {Modal} from "./modal.js";
import "./card.css"
import {deleteProject} from "./projectArr.js";
import {allProjects} from "./state.js";
import {renderProjectBtns} from "./ui.js";

export class Card{
    makeProjectCard (project){
        let card = document.createElement("div");
        card.classList.add("card");

        let header = document.createElement("h3");

        header.textContent = project.projectName;
        card.append(header);

        let tasksContainer = document.createElement("div");
        tasksContainer.classList.add("tasks-container");
    card.append(tasksContainer);
        

        let addToDoBtn = document.createElement("button");

        addToDoBtn.classList.add("addToDoBtn");
        addToDoBtn.textContent = "Add Task";
        addToDoBtn.style.backgroundColor = "green";
        card.appendChild(addToDoBtn);
        
        addToDoBtn.addEventListener("click", ()=> {
            const modal = new Modal();

           const toDoModal = modal.createToDoModal(project,tasksContainer);
           document.body.append(toDoModal.dialog);
           toDoModal.dialog.showModal();



        })

        

           let deleteProjectBtn = document.createElement("button");
           deleteProjectBtn.textContent = "Delete Project";
           deleteProjectBtn.style.backgroundColor = "red";
           card.append(deleteProjectBtn);

           deleteProjectBtn.addEventListener("click" , ()=> {
                deleteProject(project);
                renderProjectBtns(allProjects);
           })
        return card
    }
}
