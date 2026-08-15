import "./modal.css";
import {NewToDo} from "./toDo.js";
import {renderTasks} from "./ui.js";
import {saveToStorage} from "./storage.js";
import { allProjects } from "./state.js";

export class Modal {
  createToDoModal(project, tasksContainer) {
    const dialog = document.createElement("dialog");
    dialog.classList.add("todo-modal");

    const form = document.createElement("form");
    form.classList.add("todo-form");

    const title = document.createElement("h2");
    title.textContent = "Add Task";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleLabel.htmlFor = "todo-title";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "todo-title";
    titleInput.required = true;

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    descriptionLabel.htmlFor = "todo-description";

    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "todo-description";
    descriptionInput.required = true;
    

    const deadlineLabel = document.createElement("label");
    deadlineLabel.textContent = "Add a deadline";
    deadlineLabel.htmlFor ="deadline-input";
    
    const deadlineInput = document.createElement("input");
    deadlineInput.type = "date";
    deadlineInput.id = "deadline-input";

    const priorityLabel = document.createElement("label");
priorityLabel.textContent = "Set a priority level";

const lowPriority = document.createElement("input");
lowPriority.type = "radio";
lowPriority.name = "priority";
lowPriority.value = "low";
lowPriority.id = "priority-low";

const lowLabel = document.createElement("label");
lowLabel.textContent = "Low";
lowLabel.htmlFor = "priority-low";


const mediumPriority = document.createElement("input");
mediumPriority.type = "radio";
mediumPriority.name = "priority";
mediumPriority.value = "medium";
mediumPriority.id = "priority-medium";

const mediumLabel = document.createElement("label");
mediumLabel.textContent = "Medium";
mediumLabel.htmlFor = "priority-medium";


const highPriority = document.createElement("input");
highPriority.type = "radio";
highPriority.name = "priority";
highPriority.value = "high";
highPriority.id = "priority-high";

const highLabel = document.createElement("label");
highLabel.textContent = "High";
highLabel.htmlFor = "priority-high";

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Add Task";

const footer = document.createElement("div");
footer.id = "modal-footer";
footer.append(cancelBtn, submitBtn);

    form.addEventListener("submit", (event)=> {
        event.preventDefault();
        const task = new NewToDo(
         titleInput.value, descriptionInput.value);

        project.addToDo (task);
         renderTasks(project, tasksContainer);

            dialog.close();
            
            console.log(project);
       
          saveToStorage(allProjects);
    })

    form.append(
      title,
      titleLabel,
      titleInput,
      descriptionLabel,
      descriptionInput,
       deadlineLabel,
    deadlineInput,
     
      priorityLabel,

    lowPriority,
    lowLabel,

    mediumPriority,
    mediumLabel,

    highPriority,
    highLabel, 
   
    footer
    );

    dialog.append(form);

    cancelBtn.addEventListener("click", () => {
      dialog.close();
    });

    return {
      dialog,
      form,
      titleInput,
      descriptionInput
    };
  }
}