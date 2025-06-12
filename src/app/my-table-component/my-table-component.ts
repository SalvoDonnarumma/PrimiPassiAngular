import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-table-component',
  imports: [CommonModule],
  templateUrl: './my-table-component.html',
  styleUrl: './my-table-component.css',
})
export class MyTableComponent implements OnInit {
  @Input() tableConfig: MyTableConfig | undefined;
  @Input() data: any[] | undefined;

  constructor() {}
  ngOnInit(): void {
    // Initialization logic if needed
  }
}

export interface MyTableConfig {
  headers: MyHeaders[];
}

export class MyHeaders {
  key: string | undefined;
  label: string | undefined;
}
