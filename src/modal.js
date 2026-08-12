
import {NewToDo, NewProject} from "./toDo.js";


export class Modal {
  createToDoModal(project) {
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

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Add Task";



    form.addEventListener("submit", (event)=> {
        event.preventDefault();
        const task = new NewToDo(
         titleInput.value, descriptionInput.value);

        project.addToDo (task);
            dialog.close();
            
            console.log(project);
    })

    form.append(
      title,
      titleLabel,
      titleInput,
      descriptionLabel,
      descriptionInput,
      cancelBtn,
      submitBtn
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