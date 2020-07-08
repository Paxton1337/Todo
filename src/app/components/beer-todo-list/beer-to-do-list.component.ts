import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beer-to-do-list',
  templateUrl: './beer-to-do-list.component.html',
  styleUrls: ['./beer-to-do-list.component.css'],
})
export class BeerToDoListComponent implements OnInit {
  response: any;
  idBeer:any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://api.punkapi.com/v2/beers').subscribe((response) => {
      this.response = response;
      console.log(this.response[2].id);
      this.idBeer = this.response;
    });
    
  }
}
