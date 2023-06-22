import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerostatusPage } from './herostatus.page';

describe('HerostatusPage', () => {
  let component: HerostatusPage;
  let fixture: ComponentFixture<HerostatusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HerostatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
