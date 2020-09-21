import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespositoriesViewComponent } from './respositories-view.component';

describe('RespositoriesViewComponent', () => {
  let component: RespositoriesViewComponent;
  let fixture: ComponentFixture<RespositoriesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespositoriesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespositoriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
