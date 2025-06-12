import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableComponent2 } from './my-table-config2';

describe('MyTableComponent2', () => {
  let component: MyTableComponent2;
  let fixture: ComponentFixture<MyTableComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTableComponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTableComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
