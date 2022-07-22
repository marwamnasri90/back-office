import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsManagementComponent } from './animals-management.component';

describe('AnimalsManagementComponent', () => {
  let component: AnimalsManagementComponent;
  let fixture: ComponentFixture<AnimalsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
