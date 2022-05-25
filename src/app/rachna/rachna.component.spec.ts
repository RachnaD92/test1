import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RachnaComponent } from './rachna.component';

describe('RachnaComponent', () => {
  let component: RachnaComponent;
  let fixture: ComponentFixture<RachnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RachnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RachnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
