import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorformComponent } from './autorform.component';

describe('AutorformComponent', () => {
  let component: AutorformComponent;
  let fixture: ComponentFixture<AutorformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
