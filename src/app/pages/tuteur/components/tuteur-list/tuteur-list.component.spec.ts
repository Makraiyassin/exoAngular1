import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurListComponent } from './tuteur-list.component';

describe('TuteurListComponent', () => {
  let component: TuteurListComponent;
  let fixture: ComponentFixture<TuteurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuteurListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
