import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMailCheckoutComponent } from './dialog-mail-checkout.component';

describe('DialogMailCheckoutComponent', () => {
  let component: DialogMailCheckoutComponent;
  let fixture: ComponentFixture<DialogMailCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMailCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMailCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
