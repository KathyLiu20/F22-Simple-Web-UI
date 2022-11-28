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
  message: string;

  constructor(studentService: ColumbiaStudentServiceService) {
    this.toggleStudent = false;
    this.studentName = undefined;
    this.studentUni = undefined;
    this.studentService = studentService;
    this.studentsInfo = undefined;
    // login
    this.username =  undefined;
    this.password = undefined;
    this.message = undefined;
  }

  ngOnInit(): void {
  }

  toggleCard(cardId): void {
    if (cardId == 'artist') {
      this.toggleStudent = !this.toggleStudent;
    }
  }

  setStudentInfo(theStudent: ColumbiaStudent): void {
    console.log('Students = \n' + JSON.stringify(theStudent, null, 2));
    this.studentsInfo = [theStudent];
  }

  setMessage(OutMessage: ColumbiaStudent): void {
    console.log('setting message');
    console.log(this.password);
    if (OutMessage.last_name === this.password) {
      this.message = 'correct password, logged in!';
      // jump to the home page
    }
    else {
      this.message = 'wrong password, try again';
    }
  }

  // login button
  onLogin(): void {
    console.log('here');
    // use user api: http://18.221.129.134:5011/users/<username>
    // to get password
    if (this.username.length > 3) {
      // use userid or email
      // userid
      this.studentService.getStudents(this.username)
        .subscribe((data) => this.setMessage(data));
      // need another api .../users/<email> to get password by email
    }
  }

  // login process
  // onLogin(): void {
  //  if (this.username.length > 3) {
  //      this.studentService.getStudents(this.username)
  //      .subscribe((data) => this.setStudentInfo(data));
  //  }
  // }

}
