import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryoSidebar } from './cryo-sidebar';

describe('CryoSidebar', () => {
  let component: CryoSidebar;
  let fixture: ComponentFixture<CryoSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryoSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryoSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
