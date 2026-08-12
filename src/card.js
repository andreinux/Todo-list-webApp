import {Modal} from "./modal.js";


export class Card{
    makeProjectCard (project){
        let card = document.createElement("div");

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
        return card
    }
}
