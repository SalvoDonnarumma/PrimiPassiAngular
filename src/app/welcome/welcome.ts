import { Component, OnInit } from '@angular/core';
import { Jumbotron } from '../core/jumbotron/jumbotron';
import { MyButtonComponent, MyButtonConfig } from '../my-button-component/my-button-component';

@Component({
  selector: 'app-welcome',
  imports: [Jumbotron, MyButtonComponent],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome implements OnInit {
  titolo: string = "Ciao, questa è la pagina di benvenuto!";
  sottotitolo: string = "Stai visualizzando la pagina di benvenuto del progetto Primipassi Angular.";
  myButtonSettings: MyButtonConfig = {
    customClass: 'btn btn-success',
    text: 'Conferma',
    icon: 'bi bi-check'
  };

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    console.log('Button Welcome clicked!');
  }
}
