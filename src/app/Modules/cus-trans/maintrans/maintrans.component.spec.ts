import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintransComponent } from './maintrans.component';

describe('MaintransComponent', () => {
  let component: MaintransComponent;
  let fixture: ComponentFixture<MaintransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintransComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
