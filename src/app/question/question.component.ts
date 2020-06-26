import { Component, OnInit, Input } from '@angular/core';
import { FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }
  public options=['a','b','c','d'];
  ngOnInit(): void {
  }
 @Input() public question;
 @Input() parentForm:FormGroup;
}
