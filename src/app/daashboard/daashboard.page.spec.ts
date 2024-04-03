import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaashboardPage } from './daashboard.page';

describe('DaashboardPage', () => {
  let component: DaashboardPage;
  let fixture: ComponentFixture<DaashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DaashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
