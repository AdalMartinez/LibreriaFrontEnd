import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosformComponent } from './prestamosform.component';

describe('PrestamosformComponent', () => {
  let component: PrestamosformComponent;
  let fixture: ComponentFixture<PrestamosformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestamosformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestamosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
