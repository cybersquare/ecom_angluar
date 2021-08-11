import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResellersComponent } from './manage-resellers.component';

describe('ManageResellersComponent', () => {
  let component: ManageResellersComponent;
  let fixture: ComponentFixture<ManageResellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageResellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageResellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
