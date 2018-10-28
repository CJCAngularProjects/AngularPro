import { Component } from '@angular/core';
import { FormGroup, FormControl,  FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-student-regisrtation',
  templateUrl: './student-regisrtation.component.html',
  styleUrls: ['./student-regisrtation.component.css']
})
export class StudentRegisrtationComponent {

  constructor(private _formBuilder : FormBuilder) { }
  
  userform = this._formBuilder.group({
    name : [],
    age : [],
    city : [],
    area : [],
  });

  
  onSubmitForm(){
    console.log(this.userform.value);
  }


}
