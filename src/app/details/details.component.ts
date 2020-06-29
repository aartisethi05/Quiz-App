import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { FormBuilder, FormGroup, FormControl , Validators} from '@angular/forms';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  userId: any;
  constructor(
    private router: Router,
    private webservice: ApiServiceService,
    private fb: FormBuilder
  ) {
    this.detailsForm = fb.group({
      username: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
    });
  }
  detailsForm: FormGroup;
  ngOnInit(): void {}

  startQuiz() {
    this.webservice.getUserId(this.detailsForm.value).subscribe(
      (data) => {
        console.log(data);
        this.userId = data.payload.userId;
        console.log(this.userId);
        localStorage.setItem('userId', this.userId);
        this.router.navigate(['quiz']);
      },
      ({ error }) => {
        alert(error.msg);
      }
    );
  }
}
