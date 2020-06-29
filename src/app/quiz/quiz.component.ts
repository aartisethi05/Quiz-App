import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questions;
  answers=[];
  userid = localStorage.getItem('userId');
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private webservice: ApiServiceService
  ) {
    this.timer = null;

    this.time = null;
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.allQuestions();
    this.clock();
  }
  allQuestions() {
    this.webservice.getQuestions().subscribe((data) => {
      this.questions = data.payload.quizzes;
      console.log('local' + localStorage.getItem('userId'));
    });
  }

  time: any = '10:00';
  
  timer;
  data=[];
  onchange(e, title, id) {
    if((this.answers.find(x => x.id === id)) !== undefined){
    console.log(this.answers.find(x => x.id === id));
      this.answers.find(x => x.id === id).ans=e.value;
    }
    else{
    this.answers.push({
      id:id,
      ques:title,
      ans:e.value
    });
  }
   // console.log(`Value is`, e.value);
   // console.log(`Title is`, title)
  }
  getResult() {
    console.log(this.answers);
    this.data=[{
      userId:this.userid,
      answers:this.answers
    }]
    console.log(this.data);
    // this.webservice.submitQuiz(this.quizForm.value).subscribe((data) => {});
    // this.router.navigate(['result']);

    clearInterval(this.timer);
  }
  startTimer(durationInSeconds) {
    var minutes;
    var seconds;
    this.timer = setInterval(() => {
      minutes = durationInSeconds / 60;
      seconds = durationInSeconds % 60;
      minutes = parseInt(minutes, 10);
      seconds = parseInt(seconds, 10);
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      this.time = minutes + ':' + seconds;
      durationInSeconds--;
      // console.log(durationInSeconds);
      if (durationInSeconds === 0) {
        //  alert('Timeout!');
        //this.getResult();
      }
    }, 1000);
  }
  clock() {
    var timeInSeconds = 60;
    this.startTimer(timeInSeconds);
  }
}
