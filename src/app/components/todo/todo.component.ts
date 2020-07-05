import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: object[];

  constructor() {}

  ngOnInit(): void {
    this.todos = [{ info: 'Test', done: false }];
  }

  addTodo(todoInfo: string) {
    this.todos.push({
      info: todoInfo,
      done: false,
    });
  }

  completeTodo(todo: object) {
    this.todos = this.todos.filter(_todo => _todo != todo)
  }
}
