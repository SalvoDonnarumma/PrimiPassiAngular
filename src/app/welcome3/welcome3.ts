import { Component, OnInit } from '@angular/core';
import { MyTableConfig, MyTableComponent } from '../my-table-component/my-table-component';
import { Jumbotron } from '../core/jumbotron/jumbotron';

@Component({
  selector: 'app-welcome3',
  imports: [Jumbotron, MyTableComponent],
  templateUrl: './welcome3.html',
  styleUrl: './welcome3.css'
})

export class Welcome3 implements OnInit {

  titolo = 'Welcome3';
  sottotitolo = 'Benvenuto nella pagina Welcome3';

  myTableConfig: MyTableConfig = {
  headers: [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' }]
  };

  tableData = [
    { id: 1, name: 'Mario', email: 'mario@example.com' },
    { id: 2, name: 'Luigi', email: 'luigi@example.com' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
