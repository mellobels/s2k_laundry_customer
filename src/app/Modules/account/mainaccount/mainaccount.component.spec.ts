import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainaccountComponent } from './mainaccount.component';

describe('MainaccountComponent', () => {
  let component: MainaccountComponent;
  let fixture: ComponentFixture<MainaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
