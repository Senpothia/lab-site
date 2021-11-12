import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationSiteComponent } from './creation-site.component';

describe('CreationSiteComponent', () => {
  let component: CreationSiteComponent;
  let fixture: ComponentFixture<CreationSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
