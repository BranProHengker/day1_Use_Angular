import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emot } from './emot';

describe('Emot', () => {
  let component: Emot;
  let fixture: ComponentFixture<Emot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
