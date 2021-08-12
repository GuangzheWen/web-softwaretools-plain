import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostAdminComponent } from './host-admin.component';

describe('HostAdminComponent', () => {
  let component: HostAdminComponent;
  let fixture: ComponentFixture<HostAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
