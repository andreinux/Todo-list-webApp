export class Card{
    makeProjectCard (project){
        let card = document.createElement("div");
        let header = document.createElement("h3");

        header.textContent = project.projectName;
        card.append(header);

        return card
    }
}