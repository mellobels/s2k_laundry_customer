import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusAccountComponent } from './cus-account.component';

describe('CusAccountComponent', () => {
  let component: CusAccountComponent;
  let fixture: ComponentFixture<CusAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CusAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
