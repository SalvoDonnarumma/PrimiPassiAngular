import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MyTableConfig2, MyTableComponent2 } from '../my-table-component2/my-table-config2';
import { Jumbotron } from '../core/jumbotron/jumbotron';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-welcome4',
  imports: [Jumbotron, MyTableComponent2, CommonModule, FormsModule],
  templateUrl: './welcome4.html',
  styleUrl: './welcome4.css'
})

export class Welcome4 implements OnInit {

  titolo = 'Welcome4';
  sottotitolo = 'Benvenuto nella pagina Welcome4';
  searchTerm : string = '';

  tableData = [
  { id: 1, name: 'Alice', score: 42, email: 'alice@example.com' },
  { id: 2, name: 'Bob', score: 41, email: 'bob@example.com' },
  { id: 3, name: 'Carol', score: 55, email: 'carol@example.com' },
  { id: 4, name: 'David', score: 48, email: 'david@example.com' },
  { id: 5, name: 'Eva', score: 33, email: 'eva@example.com' },
  { id: 6, name: 'Frank', score: 29, email: 'frank@example.com' },
  { id: 7, name: 'Grace', score: 61, email: 'grace@example.com' },
  { id: 8, name: 'Hannah', score: 44, email: 'hannah@example.com' },
  { id: 9, name: 'Ian', score: 41, email: 'ian@example.com' },
  { id: 10, name: 'Jane', score: 50, email: 'jane@example.com' },
  { id: 11, name: 'Kevin', score: 27, email: 'kevin@example.com' },
  { id: 12, name: 'Laura', score: 53, email: 'laura@example.com' },
  { id: 13, name: 'Mike', score: 45, email: 'mike@example.com' },
  { id: 14, name: 'Nina', score: 36, email: 'nina@example.com' },
  { id: 15, name: 'Oscar', score: 40, email: 'oscar@example.com' },
  { id: 16, name: 'Paula', score: 47, email: 'paula@example.com' },
  { id: 17, name: 'Quinn', score: 35, email: 'quinn@example.com' },
  { id: 18, name: 'Rachel', score: 49, email: 'rachel@example.com' },
  { id: 19, name: 'Steve', score: 31, email: 'steve@example.com' },
  { id: 20, name: 'Tina', score: 41, email: 'tina@example.com' },
];

  filteredData = [...this.tableData];

  tableConfig: MyTableConfig2 = {
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
    }
  };

  constructor() {}

  ngOnInit(): void {}

  filterData(): void {
    if (!this.searchTerm) {
      this.filteredData = [...this.tableData];
      return;
    }

    const searchTermLower = this.searchTerm.toLowerCase();
    const columnsToSearch = this.tableConfig.search.columns;

  if (!columnsToSearch) {
    this.filteredData = [];
    return;
  }

  this.filteredData = this.tableData.filter(item => {
    return columnsToSearch.some(column => {
      const value = (item as any)[column];

      if (value === undefined || value === null) 
        return false;
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchTermLower);
      }
      if (typeof value === 'number') {
        return value.toString().includes(this.searchTerm);
      }
      return false;
    });
  });
  }

  onClick(): void {
    this.filterData();
    console.log('Ricerca effettuata per:', this.searchTerm);
  }
}
