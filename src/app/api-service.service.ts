import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private api:HttpClient) { }

  getUserId(details):Observable<any>{
    return this.api.post('http://localhost:3000/api/v1/users',details);
  }
  getQuestions():Observable<any>{
    return this.api.get('http://localhost:3000/api/v1/quiz');
  }
  submitQuiz(answers):Observable<any>{
    return this.api.post('',answers);
  }

}
