import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { StudentServiceService } from './service/student-service.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudentModule,
    HttpClientModule
  ],
  providers: [
    StudentServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
