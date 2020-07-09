import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-for-beer',
  templateUrl: './todo-for-beer.component.html',
  styleUrls: ['./todo-for-beer.component.css'],
})
export class TodoForBeerComponent implements OnInit {
  response: any;
  todos: object[] = [];
  valueInput: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://api.punkapi.com/v2/beers').subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
    
    this.todos = JSON.parse(localStorage.getItem('beers')) || [];
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
