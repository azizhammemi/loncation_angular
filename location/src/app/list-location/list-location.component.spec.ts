import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocationComponent } from './list-location.component';

describe('ListLocationComponent', () => {
  let component: ListLocationComponent;
  let fixture: ComponentFixture<ListLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListLocationComponent]
    });
    fixture = TestBed.createComponent(ListLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
