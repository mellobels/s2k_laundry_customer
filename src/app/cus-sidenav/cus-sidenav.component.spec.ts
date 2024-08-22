import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusSidenavComponent } from './cus-sidenav.component';

describe('CusSidenavComponent', () => {
  let component: CusSidenavComponent;
  let fixture: ComponentFixture<CusSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CusSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
