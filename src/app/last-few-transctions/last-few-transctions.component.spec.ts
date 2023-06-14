import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFewTransctionsComponent } from './last-few-transctions.component';

describe('LastFewTransctionsComponent', () => {
  let component: LastFewTransctionsComponent;
  let fixture: ComponentFixture<LastFewTransctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastFewTransctionsComponent]
    });
    fixture = TestBed.createComponent(LastFewTransctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
