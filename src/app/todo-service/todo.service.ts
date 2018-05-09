import { Injectable } from '@angular/core';
import { Todo } from '../todo-service/todo';

@Injectable()
export class TodoService {

    todoListItems: any[] = [];

    getItems() {

    }

    addItem(todo: Todo) {
        // to-do from server
    }

    deleteItem() {
        // to-do
    }
}

