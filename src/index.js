import "./index.css";
import { NewProject } from "./toDo.js";
import { Card } from "./card.js";
import {loadProjects, saveToStorage} from "./storage.js";
import {renderTasks, renderProjects, renderProjectBtns} from "./ui.js"
import {allProjects} from "./state.js";
import {addProject} from "./projectArr.js";


renderProjectBtns(allProjects);


const projectForm = document.querySelector("#projectForm");
const projectInput = document.querySelector("#projectInput");
const projectsContainer = document.querySelector("#projects-container");

projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const project = new NewProject(projectInput.value);

  addProject(project);
  projectForm.reset();

  //
  projectBtnContainer.innerHTML="";
  renderProjectBtns(allProjects);
  
});
