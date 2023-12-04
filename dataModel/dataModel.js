import datamodel from '../dataEntities/dataModelEntities.js';

class TodoDataService {
    addTodo(){
        let todoData = [];
        todoData.push(new datamodel("todo12", "status1", 1, "selfcare", "monday" ));
        todoData.push(new datamodel("todo22", "status2", 2, "groceries", "friday"  ));
        return todoData;
    }

    deleteTodo(id){
        todoData.filter(todo =>  todo.id !== id); 
    }


}