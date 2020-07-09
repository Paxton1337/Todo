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
  intermediateTodos: Todos;
  beers: any;

  constructor(private http: HttpClient) {}

  refreshBeers(beerID: number, thisTodos: any) {
    this.beers = this.beers.filter((beer: any) => beer.id != beerID);

    this.beers.push({
      id: beerID,
      todos: thisTodos,
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

  doneTodo(todo: any, item: any, id: number) {
    todo.done = !todo.done;

    localStorage.setItem('beer_' + id, JSON.stringify(item));

    this.refreshBeers(id, item);
  }

  removeTodo(todo: any, item: any, id: number) {
    this.todos = this.todos.filter((_todo:any) =>_todo.id != id);

    item = item.filter((_todo:any)=> _todo != todo);

    this.intermediateTodos = {  
      id: id,
      todos: item,
    }    

    this.todos.push(this.intermediateTodos);

    localStorage.setItem('beer_' + id, JSON.stringify(item));

    this.refreshBeers(id, item);
  }
}

export interface Todos{
  id:number,
  todos:object[],
}