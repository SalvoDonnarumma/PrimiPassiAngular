import { Component } from '@angular/core';
import { Jumbotron } from '../core/jumbotron/jumbotron';
import { MyButtonComponent, MyButtonConfig } from '../my-button-component/my-button-component';

@Component({
  selector: 'app-welcome2',
  imports: [Jumbotron, MyButtonComponent],
  templateUrl: './welcome2.html',
  styleUrl: './welcome2.css'
})
export class Welcome2 {
  titolo: string = "Ciao, questa è la pagina Welcome2!";
  sottotitolo: string = "Stai visualizzando la seconda pagina del progetto Primipassi Angular.";
  myButtonSettings: MyButtonConfig = {
    customClass: 'btn btn-info btn-lg btn-block',
    text: 'Conferma2',
    icon: 'bi bi-check'
  };

  constructor() { }

  ngOnInit(): void {
  }
  
  handleClick(): void {
    console.log('Button Welcome2 clicked!');
  }
}
