import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreationComponentComponent } from './form-creation-component.component';

describe('FormCreationComponentComponent', () => {
  let component: FormCreationComponentComponent;
  let fixture: ComponentFixture<FormCreationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
