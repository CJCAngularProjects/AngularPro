import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegisrtationComponent } from './student-regisrtation/student-regisrtation.component';
import { StudentDisplayComponent } from './student-display/student-display.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentRegisrtationComponent, StudentDisplayComponent]
})
export class StudentModule { }
