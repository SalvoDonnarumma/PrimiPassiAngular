import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome3 } from './welcome3';

describe('Welcome3', () => {
  let component: Welcome3;
  let fixture: ComponentFixture<Welcome3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Welcome3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Welcome3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
