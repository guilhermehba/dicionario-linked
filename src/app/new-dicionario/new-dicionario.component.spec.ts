import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDicionarioComponent } from './new-dicionario.component';

describe('NewDicionarioComponent', () => {
  let component: NewDicionarioComponent;
  let fixture: ComponentFixture<NewDicionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDicionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDicionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
