import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerToDoListComponent } from './beer-to-do-list.component';

describe('BeerToDoListComponent', () => {
  let component: BeerToDoListComponent;
  let fixture: ComponentFixture<BeerToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
