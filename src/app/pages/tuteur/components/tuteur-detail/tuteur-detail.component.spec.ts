import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurDetailComponent } from './tuteur-detail.component';

describe('TuteurDetailComponent', () => {
  let component: TuteurDetailComponent;
  let fixture: ComponentFixture<TuteurDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuteurDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuteurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
