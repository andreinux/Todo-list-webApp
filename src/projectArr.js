import {allProjects} from "./state.js";
import {saveToStorage} from "./storage.js";
import {renderProjectBtns} from "./ui.js";


export function addProject(project) {
  
  allProjects.push(project);
  saveToStorage(allProjects);
}


export function deleteProject (project){
    const index = allProjects.indexOf(project);

    if (index != -1){
      allProjects.splice(index, 1);
      saveToStorage(allProjects);

       const projectBtnContainer = document.querySelector("#projectBtnContainer")
       projectBtnContainer.innerHTML = "";
       const projectsContainer = document.querySelector("#projects-container");
       projectsContainer.innerHTML = "";
    }
}