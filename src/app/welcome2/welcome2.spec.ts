import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome2 } from './welcome2';

describe('Welcome2', () => {
  let component: Welcome2;
  let fixture: ComponentFixture<Welcome2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Welcome2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Welcome2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
