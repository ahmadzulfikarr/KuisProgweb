import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    serverID : number = 1731710171;
    serverStatus = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}