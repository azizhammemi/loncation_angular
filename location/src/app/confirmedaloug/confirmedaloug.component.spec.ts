import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedalougComponent } from './confirmedaloug.component';

describe('ConfirmedalougComponent', () => {
  let component: ConfirmedalougComponent;
  let fixture: ComponentFixture<ConfirmedalougComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmedalougComponent]
    });
    fixture = TestBed.createComponent(ConfirmedalougComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
