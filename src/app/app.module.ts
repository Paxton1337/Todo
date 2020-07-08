import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { BeerComponent } from './components/beer-list/beer.component';
import { BeerToDoComponent } from './components/beer-info/beer-to-do.component';
import { BeerToDoListComponent } from './components/beer-todo-list/beer-to-do-list.component';
import { TodoForBeerComponent } from './components/todo-for-beer/todo-for-beer.component';

const appRoutes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'beer', component: BeerComponent },
  { path: 'beer/:id', component: BeerToDoComponent },
  { path: 'beer-todo-list', component: TodoForBeerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    BeerComponent,
    BeerToDoComponent,
    BeerToDoListComponent,
    TodoForBeerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
