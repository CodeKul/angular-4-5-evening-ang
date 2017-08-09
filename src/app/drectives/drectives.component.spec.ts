import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrectivesComponent } from './drectives.component';

describe('DrectivesComponent', () => {
  let component: DrectivesComponent;
  let fixture: ComponentFixture<DrectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
