import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusLandingpageComponent } from './cus-landingpage.component';

describe('CusLandingpageComponent', () => {
  let component: CusLandingpageComponent;
  let fixture: ComponentFixture<CusLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusLandingpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
