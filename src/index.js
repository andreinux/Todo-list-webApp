
import "./index.css";
console.log("check");
import {NewProject} from "./toDo.js";
import {NewToDo} from "./toDo.js";
import {Card} from "./dom.js";
import {Modal} from "./dom.js";

let allProjects = [];

function addProject (project){
    allProjects.push(project);
}

//--------------------
const project1 = new NewProject("study");
addProject(project1);
const toDo1 = new NewToDo("study dsa","linked lists");
project1.addToDo(toDo1);

//--------------------

 let newProjectBtn = document.querySelector("#newProjectBtn");
let projectInput = document.querySelector("#projectInput");
let projectsContainer = document.querySelector("#projects-container");

newProjectBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    const project = new NewProject(projectInput.value);
    addProject(project);
    

    const card = new Card();
    const projectCard = card.makeProjectCard(project);
    projectsContainer.append(projectCard);
})