import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerToDoComponent } from './beer-to-do.component';

describe('BeerToDoComponent', () => {
  let component: BeerToDoComponent;
  let fixture: ComponentFixture<BeerToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
