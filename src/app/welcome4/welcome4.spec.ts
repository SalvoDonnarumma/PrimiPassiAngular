import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome4 } from './welcome4';

describe('Welcome4', () => {
  let component: Welcome4;
  let fixture: ComponentFixture<Welcome4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Welcome4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Welcome4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
