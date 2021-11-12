import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSitesComponent } from './liste-sites.component';

describe('ListeSitesComponent', () => {
  let component: ListeSitesComponent;
  let fixture: ComponentFixture<ListeSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
