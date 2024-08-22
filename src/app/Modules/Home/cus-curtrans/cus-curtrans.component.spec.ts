import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusCurtransComponent } from './cus-curtrans.component';

describe('CusCurtransComponent', () => {
  let component: CusCurtransComponent;
  let fixture: ComponentFixture<CusCurtransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusCurtransComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CusCurtransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
