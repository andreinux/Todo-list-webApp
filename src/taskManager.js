import {NewProject}from "./toDo.js"


export class TaskManager {
    deleteTask (project,toDo){
        project.toDoArr = project.toDoArr.filter(item=> item !== toDo);
    }
}