import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  username = '';
  constructor() { }

  ngOnInit() {
  }

  onUpdateServerName(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }
   changeusername(){
     this.username = '';
   }

}
