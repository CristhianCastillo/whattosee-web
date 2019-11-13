import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMoviesGendersComponent } from './menu-movies-genders.component';

describe('MenuMoviesGendersComponent', () => {
  let component: MenuMoviesGendersComponent;
  let fixture: ComponentFixture<MenuMoviesGendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMoviesGendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMoviesGendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
