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
  all_questions;
  questions=[];
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
      this.all_questions = data.payload.quizzes;
    });
  }

  time: any = '10:00';
  
  timer;
  data;
  onchange(e, title, id) {
    if((this.questions.find(x => x.title === title)) !== undefined){
      this.questions.find(x => x.title === title).answer=e.value;
    }
    else{
    this.questions.push({
      title:title,
      answer:e.value
    });
  }
  }
  getResult() {
    this.data={
      questions:this.questions
    }
    console.log(this.questions);
     this.webservice.submitQuiz(this.data,this.userid).subscribe((data) => {
       console.log(data.msg);
     });
     this.router.navigate(['result']);

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
      if (durationInSeconds === 0) {
     //  alert('Timeout!');
     // this.getResult();
      }
    }, 1000);
  }
  clock() {
    var timeInSeconds = 60;
    this.startTimer(timeInSeconds);
  }
}
