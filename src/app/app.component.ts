import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message='';
  buttonClicks = [];
  add =1;
  toggle = false;

  constructor(){

  }

  showMsg(){
    this.toggle = !this.toggle;
    this.message = 'Secret Password = tuna';
    
    this.buttonClicks.push(this.add++);
  }

}
