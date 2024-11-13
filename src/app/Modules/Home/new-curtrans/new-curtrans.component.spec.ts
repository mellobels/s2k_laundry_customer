import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCurtransComponent } from './new-curtrans.component';

describe('NewCurtransComponent', () => {
  let component: NewCurtransComponent;
  let fixture: ComponentFixture<NewCurtransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCurtransComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCurtransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
