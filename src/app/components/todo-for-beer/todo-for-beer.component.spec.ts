import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoForBeerComponent } from './todo-for-beer.component';

describe('TodoForBeerComponent', () => {
  let component: TodoForBeerComponent;
  let fixture: ComponentFixture<TodoForBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoForBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoForBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
