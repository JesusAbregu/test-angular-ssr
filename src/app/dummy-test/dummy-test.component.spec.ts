import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTestComponent } from './dummy-test.component';

describe('DummyTestComponent', () => {
  let component: DummyTestComponent;
  let fixture: ComponentFixture<DummyTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyTestComponent]
    });
    fixture = TestBed.createComponent(DummyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
