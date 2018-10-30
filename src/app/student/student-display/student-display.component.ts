import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/service/student-service.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent implements OnInit {

  public StudentList : Student[];

  constructor(private _studentServiceService:StudentServiceService) { }

  ngOnInit() : void {
    this._studentServiceService.getStudentData().subscribe(data => {
      this.StudentList = data;
    },
      error => {
        console.error('Error while getting student data. Stack: ', error);
      }
    );
  }

  deleteRecord(){
    console.log("delete is called");
  }

}
