import "./edit.css";
import { saveToStorage } from "./storage.js";
import { allProjects } from "./state.js";
import { renderTasks } from "./ui.js";

export function renderEditModal(task, project, tasksContainer) {
    const dialog = document.createElement("dialog");
    dialog.classList.add("edit-task-modal");

    const form = document.createElement("form");
    form.classList.add("edit-task-form");

    // =========================
    // Heading
    // =========================

    const heading = document.createElement("h2");
    heading.textContent = "Edit Task";


    // =========================
    // Title
    // =========================

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleLabel.htmlFor = "edit-title";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "edit-title";
    titleInput.required = true;
    titleInput.value = task.title;


    // =========================
    // Description
    // =========================

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    descriptionLabel.htmlFor = "edit-description";

    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "edit-description";
    descriptionInput.value = task.description || "";


    // =========================
    // Deadline
    // =========================

    const deadlineLabel = document.createElement("label");
    deadlineLabel.textContent = "Add a deadline";
    deadlineLabel.htmlFor = "edit-deadline";

    const deadlineInput = document.createElement("input");
    deadlineInput.type = "date";
    deadlineInput.id = "edit-deadline";
    deadlineInput.value = task.date || "";


    // =========================
    // Priority
    // =========================

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Set a priority level";

    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("priority-container");


    // Low

    const lowPriority = document.createElement("input");
    lowPriority.type = "radio";
    lowPriority.name = "edit-priority";
    lowPriority.value = "Low";
    lowPriority.id = "edit-priority-low";

    const lowLabel = document.createElement("label");
    lowLabel.textContent = "Low";
    lowLabel.htmlFor = "edit-priority-low";

    if (task.priority === "Low") {
        lowPriority.checked = true;
    }


    // Medium

    const mediumPriority = document.createElement("input");
    mediumPriority.type = "radio";
    mediumPriority.name = "edit-priority";
    mediumPriority.value = "Medium";
    mediumPriority.id = "edit-priority-medium";

    const mediumLabel = document.createElement("label");
    mediumLabel.textContent = "Medium";
    mediumLabel.htmlFor = "edit-priority-medium";

    if (task.priority === "Medium") {
        mediumPriority.checked = true;
    }


    // High

    const highPriority = document.createElement("input");
    highPriority.type = "radio";
    highPriority.name = "edit-priority";
    highPriority.value = "High";
    highPriority.id = "edit-priority-high";

    const highLabel = document.createElement("label");
    highLabel.textContent = "High";
    highLabel.htmlFor = "edit-priority-high";

    if (task.priority === "High") {
        highPriority.checked = true;
    }


    priorityContainer.append(
        lowPriority,
        lowLabel,

        mediumPriority,
        mediumLabel,

        highPriority,
        highLabel
    );


    // =========================
    // Buttons
    // =========================

    const footer = document.createElement("div");
    footer.id = "edit-modal-footer";


    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";


    const saveBtn = document.createElement("button");
    saveBtn.type = "submit";
    saveBtn.textContent = "Save Changes";


    footer.append(
        cancelBtn,
        saveBtn
    );


    // =========================
    // Submit
    // =========================

   // =========================
    // Submit
    // =========================

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const selectedPriority = form.querySelector(
            'input[name="edit-priority"]:checked'
        );

        task.title = titleInput.value;
        task.description = descriptionInput.value;
        task.date = deadlineInput.value;

        task.priority = selectedPriority
            ? selectedPriority.value
            : null;

        saveToStorage(allProjects);

        // 1. Search allProjects to find the specific project that owns this task
        const activeProject = allProjects.find(p => p.toDoArr.includes(task));

        // 2. Force-grab the container from the live DOM
        const domContainer = document.querySelector(".tasks-container");
        
        // 3. Render only if we successfully found both
        if (activeProject && domContainer) {
            renderTasks(activeProject, domContainer);
        } else {
            console.error("Could not find project or container! activeProject:", activeProject, "domContainer:", domContainer);
        }

        dialog.close();
        dialog.remove();
    });


    // =========================
    // Build Modal
    // =========================

    form.append(
        heading,

        titleLabel,
        titleInput,

        descriptionLabel,
        descriptionInput,

        deadlineLabel,
        deadlineInput,

        priorityLabel,
        priorityContainer,

        footer
    );

    dialog.append(form);

    document.body.append(dialog);

    dialog.showModal();


    // =========================
    // Cancel
    // =========================

    cancelBtn.addEventListener("click", () => {
        dialog.close();
        dialog.remove();
    });
}