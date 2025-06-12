import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MyTableActionEnum, MyTableComponent3, MyTableConfig3 } from '../my-table-component3/my-table-component3';
import { Jumbotron } from '../core/jumbotron/jumbotron';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyButtonConfig, MyButtonComponent } from '../my-button-component/my-button-component';
import { Router } from '@angular/router';
import { FormField } from '../form-page-component/form-page-component';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-welcome5',
  imports: [Jumbotron, CommonModule, FormsModule, MyTableComponent3, MyButtonComponent],
  templateUrl: './welcome5.html',
  styleUrl: './welcome5.css'
})
export class Welcome5 {
  titolo = 'Welcome5';
  sottotitolo = 'Benvenuto nella pagina Welcome5';
  searchTerm : string = '';

  formFields: FormField[] = [
    { key: 'name', label: 'Nome', required: true },
    { key: 'email', label: 'Email', type: 'email', required: true },
    { key: 'score', label: 'Punteggio', type: 'number' }
  ];
  
  filteredData: any[] = [];

    tableConfig: MyTableConfig3 = {
      headers: [
        { key: 'id',    label: 'ID' },
        { key: 'name',  label: 'Nome' },
        { key: 'email', label: 'Email' },
        { key: 'score', label: 'Punteggio' }
      ],
      order: {
        defaultColumn: 'id',
        orderType: 'asc',
      },
      search: {
        columns: ['name', 'email', 'id'] 
      },
      pagination: {
        itemsPerPage: 5,
        itemsPerPageOptions: [5, 10, 15, 20]
      },
      actions: [ 
        {
          type: MyTableActionEnum.EDIT,
          buttonConfig : {
            customClass: 'btn-warning',
            text: 'Modifica',
            icon: 'bi bi-brush'
          }
        },
        {
          type: MyTableActionEnum.DELETE,
          buttonConfig : {
            customClass: 'btn-danger',
            text: 'Elimina',
            icon: 'bi bi-trash'
          }
        }
      ]
    };

    myAddButtonSettings: MyButtonConfig = {
        customClass: 'btn-light',
        text: 'Aggiungi',
        icon: 'bi-plus-circle'
      };
  
    ngOnInit(): void {}

    constructor(private router: Router, private dataService: DataService) {
      this.dataService.data$.subscribe(data => {
        this.filteredData = [...data];
      });

      const navigation = this.router.getCurrentNavigation();
      const state = navigation?.extras.state as {
        formData: any,
        mode: 'add' | 'edit'
      };

      if (state?.formData) {
        if (state.mode === 'edit') {
          this.updateItem(state.formData);
        } else {
          this.addItem(state.formData);
        }
      }
    }
  
    filterData(): void {
      this.dataService.getFilteredData(
        this.searchTerm, 
        this.tableConfig.search.columns || []
      ).subscribe(filtered => {
        this.filteredData = filtered;
      });
    }
  
    onClick(): void {
      this.filterData();
      console.log('Ricerca effettuata per:', this.searchTerm);
    }

    handleClick(): void {
      console.log('AddButton clicked!');
      this.navigateToAdd();
    }

    handleTableAction(event: {action: MyTableActionEnum, item: any}) {
      switch(event.action) {
        case MyTableActionEnum.EDIT:
        console.log('Modifica elemento:', event.item);
        this.navigateToEdit(event.item);
      break;
      case MyTableActionEnum.DELETE:
        console.log('Elimina elemento:', event.item);
        /*const index = this.filteredData.findIndex(x => x.id === event.item.id);
        if (index !== -1) {
          this.filteredData = [...this.filteredData];
          this.filteredData.splice(index, 1);
        }
        this.filteredData = this.filteredData.filter(x => x.id !== event.item.id);*/
        this.dataService.deleteItem(event.item.id);
        break;
      }
    }

    navigateToAdd() {
      this.router.navigate(['/welcome6'], { 
        state: { 
          mode: 'add',
          fields: this.formFields 
        }
      });
    }

    navigateToEdit(item: any) {
      this.router.navigate(['/welcome6'], {
        state: {
          mode: 'edit',
          item: item,
          fields: this.formFields
        }
      });
    }

    private updateItem(modifiedItem: any) {
      this.dataService.updateItem(modifiedItem);
    }

    private addItem(newItem: any) {
      this.dataService.addItem(newItem);
    }
    
}
