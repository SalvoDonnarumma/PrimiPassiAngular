import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome5 } from './welcome5';

describe('Welcome5', () => {
  let component: Welcome5;
  let fixture: ComponentFixture<Welcome5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Welcome5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Welcome5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
