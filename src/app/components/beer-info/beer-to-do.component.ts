import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-to-do',
  templateUrl: './beer-to-do.component.html',
  styleUrls: ['./beer-to-do.component.css'],
})
export class BeerToDoComponent implements OnInit {
  id: string = this.activateRoute.snapshot.params['id'];
  response: any;
  todos: object[] = JSON.parse(localStorage.getItem('beer_' + this.id)) || [];
  valueInput: string;
  beers: any;

  refreshBeers() {
    this.beers = this.beers.filter((beer: any) => beer.id != this.id);

    this.beers.push({
      id: this.id,
      todos: this.todos,
      filter: false,
    });
    localStorage.setItem('beers', JSON.stringify(this.beers));
  }

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.http
      .get('https://api.punkapi.com/v2/beers/' + this.id)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });

    console.log(this.beers);

    this.beers = JSON.parse(localStorage.getItem('beers')) || [];

    this.refreshBeers();
  }

  addTodo() {
    if (this.valueInput) {
      this.todos.push({
        info: this.valueInput,
        done: false,
      });
    }

    localStorage.setItem('beer_' + this.id, JSON.stringify(this.todos));

    this.valueInput = '';

    this.refreshBeers();
  }

  doneTodo(todo: any) {
    todo.done = !todo.done;

    localStorage.setItem('beer_' + this.id, JSON.stringify(this.todos));
    
    this.refreshBeers();
  }

  removeTodo(todo: object) {
    this.todos = this.todos.filter((_todo) => _todo != todo);

    localStorage.setItem('beer_' + this.id, JSON.stringify(this.todos));

    this.refreshBeers()
  }
}
