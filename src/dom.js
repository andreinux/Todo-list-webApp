export class Card{
    makeProjectCard (project){
        let card = document.createElement("div");
        let header = document.createElement("h3");

        header.textContent = project.projectName;
        card.append(header);

        let addToDoBtn = document.createElement("button");
        addToDoBtn.classList.add("addToDoBtn");
        addToDoBtn.textContent = "Add Task";
        addToDoBtn.style.backgroundColor = "green";
        card.appendChild(addToDoBtn);

        return card
    }
}