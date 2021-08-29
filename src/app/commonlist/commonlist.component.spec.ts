import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonlistComponent } from './commonlist.component';

describe('CommonlistComponent', () => {
  let component: CommonlistComponent;
  let fixture: ComponentFixture<CommonlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
