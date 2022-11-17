import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ColumbiaStudentServiceService } from './log.service';
import {ColumbiaStudent} from './log';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  toggleStudent: boolean;
  studentName: string;
  studentUni: string;
  studentService: ColumbiaStudentServiceService;
  studentsInfo: ColumbiaStudent[];
  // login
  username: string;
  password: string;

  constructor(studentService: ColumbiaStudentServiceService) {
    this.toggleStudent = false;
    this.studentName = undefined;
    this.studentUni = undefined;
    this.studentService = studentService;
    this.studentsInfo = undefined;
    // login
    this.username =  undefined;
    this.password = undefined;
  }

  ngOnInit(): void {
  }

  toggleCard(cardId): void {
    if (cardId == 'artist') {
      this.toggleStudent = !this.toggleStudent;
    }
  }

  setStudentInfo(theStudent: ColumbiaStudent): void {
    console.log("Students = \n" + JSON.stringify(theStudent, null, 2));
    this.studentsInfo = [theStudent];
  }


  onSomethingInput(e: Event) : void {
    // console.log("Input = ", (<HTMLInputElement> e.target).value);
    this.studentUni = (<HTMLInputElement> e.target).value;
    if (this.studentUni.length > 2) {
      this.studentService.getStudents(this.studentUni)
        .subscribe((data) => this.setStudentInfo(data));
    }
  }

  onLookup(): void {
    if (this.studentUni.length > 3) {
      this.studentService.getStudents(this.studentUni)
        .subscribe((data) => this.setStudentInfo(data));
    }
  }

  // login process
  //onLogin(): void {
  //  if (this.username.length > 3) {
  //      this.studentService.getStudents(this.username)
  //      .subscribe((data) => this.setStudentInfo(data));
  //  }
  // }

}
