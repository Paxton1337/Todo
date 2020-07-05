import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit {
  response: any;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get('https://api.punkapi.com/v2/beers/random')
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
  }
  search() {
    this.http
      .get('https://api.punkapi.com/v2/beers/random')
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
  }
}
// ../../../assets/user.json
