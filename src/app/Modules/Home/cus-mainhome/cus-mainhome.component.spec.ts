import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusMainhomeComponent } from './cus-mainhome.component';

describe('CusMainhomeComponent', () => {
  let component: CusMainhomeComponent;
  let fixture: ComponentFixture<CusMainhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusMainhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CusMainhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
