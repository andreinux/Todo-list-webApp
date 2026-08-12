
import "./index.css";
console.log("check");
import {NewProject} from "./toDo.js";
import {NewToDo} from "./toDo.js";
import {Card} from "./card.js";
import {Modal} from "./modal.js";

let allProjects = [];

function addProject (project){
    allProjects.push(project);
}


let projectForm = document.querySelector("#projectForm")
let projectInput = document.querySelector("#projectInput");
let projectsContainer = document.querySelector("#projects-container");

projectForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const project = new NewProject(projectInput.value);
    addProject(project);
    

    const card = new Card();
    const projectCard = card.makeProjectCard(project);
    projectsContainer.append(projectCard);

    projectForm.reset();
    
})

let viewProjects = document.querySelector("#viewProjects")

viewProjects.addEventListener("click" , ()=> {
    console.log(allProjects);
})

