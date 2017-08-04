import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutComComponent } from './out-com.component';

describe('OutComComponent', () => {
  let component: OutComComponent;
  let fixture: ComponentFixture<OutComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
