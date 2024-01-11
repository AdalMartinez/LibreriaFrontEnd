import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosformComponent } from './librosform.component';

describe('LibrosformComponent', () => {
  let component: LibrosformComponent;
  let fixture: ComponentFixture<LibrosformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
