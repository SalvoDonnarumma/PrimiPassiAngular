import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-button-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-button-component.html',
  styleUrl: './my-button-component.css'
})
export class MyButtonComponent implements OnInit {
  @Input()
  buttonConfig: MyButtonConfig | undefined ;

  @Output()
  buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  onClick(): void {
    this.buttonClicked.emit();
  }
}

export class MyButtonConfig{
    customClass: string | undefined;
    text: string | undefined;
    icon: string | undefined;
}