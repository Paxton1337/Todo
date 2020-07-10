import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-for-beer',
  templateUrl: './todo-for-beer.component.html',
  styleUrls: ['./todo-for-beer.component.css'],
})
export class TodoForBeerComponent implements OnInit {
  response: any;
  todos: any = [];
  intermediateTodos: Todos;
  beers: any;

  constructor(private http: HttpClient) {}

  refreshBeers(beerID: number, thisTodos: any): void {
    this.beers = this.beers.filter((beer: any) => beer.id != beerID);

    this.beers.push({
      id: beerID,
      todos: thisTodos,
      filter: false,
    });

    localStorage.setItem('beers', JSON.stringify(this.beers));
  }

  ngOnInit(): void {
    this.http.get('https://api.punkapi.com/v2/beers').subscribe((response) => {
      this.response = response;
    });

    this.todos = JSON.parse(localStorage.getItem('beers')) || [];

    this.beers = JSON.parse(localStorage.getItem('beers')) || [];
  }

  doneTodo(todo: any, item: any, id: number): void {
    todo.done = !todo.done;

    localStorage.setItem('beer_' + id, JSON.stringify(item));

    this.refreshBeers(id, item);
    console.log(item);
    console.log(this.todos);
  }

  removeTodo(todo: any, item: any, id: number): void {
    this.todos = this.todos.filter((_todo: any) => _todo.id != id);

    item = item.filter((_todo: any) => _todo != todo);

    this.intermediateTodos = {
      id: id,
      todos: item,
      filter: false,
    };

    this.todos.push(this.intermediateTodos);

    localStorage.setItem('beer_' + id, JSON.stringify(item));

    this.refreshBeers(id, item);
  }

  filterBtn(id: number): void {
    this.todos.forEach((item: any) => {
      if (item.id == id) {
        return (item.filter = !item.filter);
      }
    });
  
    this.todos = this.todos.filter((item: any) => item.filter);

    if (this.todos.length == 0) {
      this.todos = JSON.parse(localStorage.getItem('beers'));
    }
  }
}

export interface Todos {
  id: number;
  todos: object[];
  filter: boolean;
}
