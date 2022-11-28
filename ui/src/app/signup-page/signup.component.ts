import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ColumbiaStudentServiceService } from './signup.service';
import {ColumbiaStudent} from './signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  toggleStudent: boolean;
  studentName: string;
  studentUni: string;
  studentService: ColumbiaStudentServiceService;
  studentsInfo: ColumbiaStudent[];
  // login
  email: string;
  username: string;
  password: string;

  constructor(studentService: ColumbiaStudentServiceService) {
    this.toggleStudent = false;
    this.studentName = undefined;
    this.studentUni = undefined;
    this.studentService = studentService;
    this.studentsInfo = undefined;
    // signup
    this.email = undefined;
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


  onSignUp(): void {
    // check if input username or email has existed in database
    // if not, insert new
    // check if username, email is valid - how to check email xxx@xxx.xx
    if (this.username.length > 3) {
      // insert api???
      this.studentService.insertUser(this.username, this.email, this.password);
    }
  }

  // signup process


}
