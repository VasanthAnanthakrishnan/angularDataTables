import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDataOptionsComponent } from './with-data-options.component';

describe('WithDataOptionsComponent', () => {
  let component: WithDataOptionsComponent;
  let fixture: ComponentFixture<WithDataOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithDataOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithDataOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
