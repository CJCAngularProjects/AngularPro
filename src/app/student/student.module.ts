import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegisrtationComponent } from './student-regisrtation/student-regisrtation.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
