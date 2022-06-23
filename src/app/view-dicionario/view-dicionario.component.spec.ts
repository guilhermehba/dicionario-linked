import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDicionarioComponent } from './view-dicionario.component';

describe('ViewDicionarioComponent', () => {
  let component: ViewDicionarioComponent;
  let fixture: ComponentFixture<ViewDicionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDicionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDicionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
