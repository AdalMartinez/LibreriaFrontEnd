import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoArchivosComponent } from './listado-archivos.component';

describe('ListadoArchivosComponent', () => {
  let component: ListadoArchivosComponent;
  let fixture: ComponentFixture<ListadoArchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoArchivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
