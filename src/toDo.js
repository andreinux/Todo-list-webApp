export class NewProject{
    constructor(projectName){
        this.projectName = projectName;
        this.toDoArr = []
    }

    addToDo (toDo){
        this.toDoArr.push(toDo);
    }
    removeToDo (toDo){
        this.toDoArr.filter(item => item !== toDo);
    }
}

export class NewToDo{
    constructor(title, description){
        this.title = title;
        this.description =description;  
    }
}

