import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: object[];
  valueInput: string;

  constructor() {}

  ngOnInit(): void {
    this.todos = [{ info: 'Test', done: false }];
  }

  addTodo() {
    if (this.valueInput) {
      this.todos.push({
        info: this.valueInput,
        done: false,
      });
    }
    this.valueInput = '';
  }

  doneTodo(todo: any) {
    todo.done = !todo.done;
  }

  removeTodo(todo: object) {
    this.todos = this.todos.filter((_todo) => _todo != todo);
  }
}
