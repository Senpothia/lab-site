import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationAnomalieComponent } from './creation-anomalie.component';

describe('CreationAnomalieComponent', () => {
  let component: CreationAnomalieComponent;
  let fixture: ComponentFixture<CreationAnomalieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationAnomalieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationAnomalieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
