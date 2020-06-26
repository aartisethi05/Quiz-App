import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  username:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  startQuiz(){
    localStorage.setItem('username', this.username);
    this.router.navigate(["quiz"]);
  }

}
