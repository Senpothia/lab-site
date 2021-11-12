import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAnomaliesComponent } from './liste-anomalies.component';

describe('ListeAnomaliesComponent', () => {
  let component: ListeAnomaliesComponent;
  let fixture: ComponentFixture<ListeAnomaliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAnomaliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAnomaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
