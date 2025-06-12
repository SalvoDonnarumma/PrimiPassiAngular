import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome6 } from './welcome6';

describe('Welcome6', () => {
  let component: Welcome6;
  let fixture: ComponentFixture<Welcome6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Welcome6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Welcome6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
