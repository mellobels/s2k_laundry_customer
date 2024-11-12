import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusCategoryComponent } from './cus-category.component';

describe('CusCategoryComponent', () => {
  let component: CusCategoryComponent;
  let fixture: ComponentFixture<CusCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
