import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultasformComponent } from './multasform.component';

describe('MultasformComponent', () => {
  let component: MultasformComponent;
  let fixture: ComponentFixture<MultasformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultasformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
