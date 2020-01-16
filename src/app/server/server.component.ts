import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color:white;
    }  
  `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus:string = 'offline';

  constructor () {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'; // ? means if true, : means if false
  }

  getColor() {
    // if(this.serverStatus === 'online'){
    //   return 'green';
    // }
    // else {
    //   return 'red';
    // }

    //return server status and if it's equal to online then return green if it's not return red
    return this.serverStatus === 'online' ? 'green' : 'red'; 

  }

  getServerStatus() {
    return this.serverStatus;
  }
}