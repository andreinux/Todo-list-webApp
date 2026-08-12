import "./index.css";
import { NewProject } from "./toDo.js";
import { Card } from "./card.js";

let allProjects = [];

function addProject(project) {
  allProjects.push(project);
}

const projectForm = document.querySelector("#projectForm");
const projectInput = document.querySelector("#projectInput");
const projectsContainer = document.querySelector("#projects-container");

projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const project = new NewProject(projectInput.value);

  addProject(project);

  const card = new Card();
  const projectCard = card.makeProjectCard(project);

  projectsContainer.append(projectCard);

  projectForm.reset();
});

const viewProjects = document.querySelector("#viewProjects");

viewProjects.addEventListener("click", () => {
  console.log(allProjects);
});