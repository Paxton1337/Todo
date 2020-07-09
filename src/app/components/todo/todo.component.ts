import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: object[] = JSON.parse(localStorage.getItem('simpleTodos')) || [];
  valueInput: string;

  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    if (this.valueInput) {
      this.todos.push({
        info: this.valueInput,
        done: false,
      });
    }
    this.valueInput = '';
    localStorage.setItem('simpleTodos', JSON.stringify(this.todos));
  }

  doneTodo(todo: any) {
    todo.done = !todo.done;
    localStorage.setItem('simpleTodos', JSON.stringify(this.todos));
  }

  removeTodo(todo: object) {
    this.todos = this.todos.filter((_todo) => _todo != todo);
    localStorage.setItem('simpleTodos', JSON.stringify(this.todos));
  }
}
