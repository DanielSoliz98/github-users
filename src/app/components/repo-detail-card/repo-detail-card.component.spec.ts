import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDetailCardComponent } from './repo-detail-card.component';

describe('RepoDetailCardComponent', () => {
  let component: RepoDetailCardComponent;
  let fixture: ComponentFixture<RepoDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
