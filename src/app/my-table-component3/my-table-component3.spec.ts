import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableComponent3 } from './my-table-component3';

describe('MyTableComponent3', () => {
  let component: MyTableComponent3;
  let fixture: ComponentFixture<MyTableComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTableComponent3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTableComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
