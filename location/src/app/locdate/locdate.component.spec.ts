import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocdateComponent } from './locdate.component';

describe('LocdateComponent', () => {
  let component: LocdateComponent;
  let fixture: ComponentFixture<LocdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocdateComponent]
    });
    fixture = TestBed.createComponent(LocdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
