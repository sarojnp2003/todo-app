import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from './todo-service/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: any[] = [];

  todo: Todo;

  todoForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.todoForm = formbuilder.group({
      description: ['']
    });
  }

  addItem(todoItem: FormGroup) {
    this.todo = new Todo();
    this.todo.id = 'id' + (new Date()).getTime();
    this.todo.description = todoItem.get('description').value;
    this.todo.checked = false;
    this.todoList.push(this.todo);
    todoItem.reset();
  }

  delteItems() {
    this.todoList = this.todoList.filter(todoList => todoList.checked === false);
  }

  update(id: String) {
    for (let todoItem of this.todoList) {
      if (todoItem.id === id) {
        todoItem.checked = this.todo.checkItem;
      }
    }
  }
}
