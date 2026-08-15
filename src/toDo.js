export class NewProject{
    constructor(projectName){
        this.projectName = projectName;
        this.toDoArr = []
    }

    addToDo (toDo){
        this.toDoArr.push(toDo);
    }
    removeToDo (toDo){
        this.toDoArr= this.toDoArr.filter(item => item !== toDo);
    }
}

export class NewToDo{
    constructor(title, description, date, priority){
        this.title = title;
        this.description =description;  
        this.date = date;
        this.priority =priority;
    }
}

