import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormPageComponent } from '../form-page-component/form-page-component';

@Component({
  selector: 'app-welcome6',
  imports: [CommonModule, FormsModule, FormPageComponent],
  templateUrl: './welcome6.html',
  styleUrl: './welcome6.css',
})
export class Welcome6 {
  formData: any = {};
  fields: any[] = [];
  mode: 'add' | 'edit' = 'add';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      mode: 'add' | 'edit';
      item?: any;
      fields: any[];
    };

    if (state) {
      this.mode = state.mode;
      this.fields = state.fields;
      this.formData =
        state.mode === 'edit' ? { ...state.item } : this.createEmptyItem();
    }

    console.log(state);
  }

  createEmptyItem() {
    const emptyItem: any = {};
    for (const field of this.fields) {
      emptyItem[field.key] = field.type === 'number' ? 0 : '';
    }
    return emptyItem;
  }

  onSubmit(item: any) {
    console.log('Aggiunta dei dati in corso: ');
    console.log(item);
    this.router.navigate(['/welcome5'], {
      state: { formData: item, mode: this.mode },
    });
  }

  onCancel() {
    this.router.navigate(['/welcome5']);
  }
}
