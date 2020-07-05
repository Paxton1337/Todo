import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: object[];
  todo: { info: string; done: boolean };

  constructor() {}

  ngOnInit(): void {
    this.todos = [{ info: 'Test', done: false }];
  }

  addTodo(todoInfo: string) {
    this.todo = {
      info: todoInfo,
      done: false,
    };
    this.todos.push(this.todo);
  }

  completeTodo(todo: object) {
    console.log(todo);
    
    for (let i = 0; i < this.todos.length; i++) {
      if ((this.todos[i] == todo)) {
        this.todos.splice(i, 1);
        break;
      }
    }
    
  }
}
