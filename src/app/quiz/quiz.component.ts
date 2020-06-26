import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quizForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.quizForm = fb.group({ ques: [] });

    this.timer = null;

    this.time = null;
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.clock();
  }
  time: any = '10:00';
  questions = ['aaa', 'bbb'];
  timer: null | NodeJS.Timeout;
  getResult() {
    this.router.navigate(['result']);
    console.log(this.quizForm.value);
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
      console.log(durationInSeconds);
      if (durationInSeconds === 0) {
        alert('timeout');
        this.getResult();
      }
    }, 1000);
  }
  clock() {
    var timeInSeconds = 60;
    this.startTimer(timeInSeconds);
    setTimeout(this.getResult, timeInSeconds * 1000);
  }
}
