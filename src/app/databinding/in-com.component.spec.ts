import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InComComponent } from './in-com.component';

describe('InComComponent', () => {
  let component: InComComponent;
  let fixture: ComponentFixture<InComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
