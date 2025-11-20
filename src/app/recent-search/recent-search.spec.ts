import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSearch } from './recent-search';

describe('RecentSearch', () => {
  let component: RecentSearch;
  let fixture: ComponentFixture<RecentSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
