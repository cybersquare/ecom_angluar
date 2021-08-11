import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveResellersComponent } from './approve-resellers.component';

describe('ApproveResellersComponent', () => {
  let component: ApproveResellersComponent;
  let fixture: ComponentFixture<ApproveResellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveResellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveResellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
