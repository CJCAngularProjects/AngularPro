import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegisrtationComponent } from './student-regisrtation/student-regisrtation.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    StudentRegisrtationComponent, 
    StudentDisplayComponent
  ],
  exports: [
    StudentRegisrtationComponent, 
    StudentDisplayComponent
  ]
})
export class StudentModule { }
