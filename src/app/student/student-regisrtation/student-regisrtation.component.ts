import { Component } from '@angular/core';
import { FormGroup, FormControl,  FormBuilder } from '@angular/forms';
import { StudentServiceService } from 'src/app/service/student-service.service';
import { Student } from 'src/app/model/student';
import { error } from 'protractor';



@Component({
  selector: 'app-student-regisrtation',
  templateUrl: './student-regisrtation.component.html',
  styleUrls: ['./student-regisrtation.component.css']
})
export class StudentRegisrtationComponent {


  constructor(private _formBuilder : FormBuilder,
    private _studentServiceService : StudentServiceService) { }
  
  userform = this._formBuilder.group({
    name : [],
    age : [],
    city : [],
    area : [],
  });

  
  onSubmitForm(){
    this._studentServiceService.postStudentData(this.userform.value).subscribe();
  }


}
