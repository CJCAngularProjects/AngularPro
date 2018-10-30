import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})



export class StudentServiceService {

  API_ENDPOINT : string = "http://localhost:3000/Students";

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json'
  //   })
  // };  

  constructor(private _httpClient : HttpClient){}

  getStudentData() : Observable<Student[]>{
      return this._httpClient.get<Student[]>(`${this.API_ENDPOINT}`);
  }

  postStudentData(student : Student) {
      return this._httpClient.post<Student>(`${this.API_ENDPOINT}`, student);
  }
}
