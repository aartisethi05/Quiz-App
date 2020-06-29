import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() {
    console.log('localstrg'+localStorage.getItem('userId'));
   }

  ngOnInit(): void {
  }

}
