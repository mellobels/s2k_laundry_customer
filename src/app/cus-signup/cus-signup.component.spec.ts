import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusSignupComponent } from './cus-signup.component';

describe('CusSignupComponent', () => {
  let component: CusSignupComponent;
  let fixture: ComponentFixture<CusSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CusSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
