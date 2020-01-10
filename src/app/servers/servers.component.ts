import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'Test';
  username ='';
  nameEntered = false;

  constructor() {
    if(this.username!=''){
      this.nameEntered = true;
    }  
  
    setTimeout( () => {
      this.allowNewServer = true;
    } , 2000);
   }

  ngOnInit() {
  }

  onEnterUsername() {
    // if(this.username!=''){
    //   this.nameEntered = true;
    // }
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}