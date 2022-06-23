import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDicionarioComponent } from './home-dicionario.component';

describe('HomeDicionarioComponent', () => {
  let component: HomeDicionarioComponent;
  let fixture: ComponentFixture<HomeDicionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDicionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDicionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
