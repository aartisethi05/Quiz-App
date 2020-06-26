import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup ,FormBuilder,FormControl} from '@angular/forms';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizForm:FormGroup;
  constructor(private router:Router,private fb:FormBuilder) {
    this.quizForm=fb.group({
      ques:[]
    })
   }
  
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void{
    this.clock();
    
  }
  
  time:any="10:00";
  questions=['aaa','bbb'];

  getResult(){
    this.router.navigate(["result"]);
    console.log(this.quizForm.value);
  }
   startTimer(duration) {
    var timer = duration;
    var minutes;
    var seconds;
    var clock=setInterval(function () {
        minutes = timer / 60;
        seconds = timer % 60;
        minutes=parseInt(minutes,10);
        seconds=parseInt(seconds,10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        this.time = minutes + ":" + seconds;
        console.log(this.time);
        if (--timer < 0) {
          alert('timed out');
          clearInterval(clock);
          
        }
    }, 1000);
    
}

 clock() {
    var tenMinutes = 60 * 1;
    this.startTimer(tenMinutes);
    
};


}
