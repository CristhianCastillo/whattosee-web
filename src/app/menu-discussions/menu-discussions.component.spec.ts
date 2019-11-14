import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDiscussionsComponent } from './menu-discussions.component';

describe('MenuDiscussionsComponent', () => {
  let component: MenuDiscussionsComponent;
  let fixture: ComponentFixture<MenuDiscussionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDiscussionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
