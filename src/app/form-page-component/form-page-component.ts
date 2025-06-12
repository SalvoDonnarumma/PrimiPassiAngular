import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-form-page-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-page-component.html',
  styleUrl: './form-page-component.css'
})
export class FormPageComponent {
  titolo = 'FormPage';
  sottotitolo = 'Benvenuto nella pagina con il from, qui puoi modificare un record già esistente e aggiungerne uno nuovo';
  @Input() fields: FormField[] = [];
  @Input() initialData: any = {};
  @Input() editMode = '';
  
  @Output() submit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  formData: any = {};

  ngOnInit() {
    this.formData = { ...this.initialData };
  }

  onSubmit() {
    this.submit.emit(this.formData);
  }

  onCancel() {
    this.cancel.emit();
  }
}

export interface FormField {
  key: string;
  label: string;
  type?: 'text' | 'number' | 'email';
  required?: boolean;
}
