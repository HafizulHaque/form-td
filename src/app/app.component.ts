import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUpForm!: NgForm;
  defaultQuestion: string = 'pet';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  hobbies: any = ['Gardening', 'Stamp collection', 'Paracycling']

  user: any = {
    name: '',
    email: '',
    gender: '',
    secretQues: '',
    answer: '',
    hobby: ''
  }

  isSubmitted: boolean = false;


  constructor(){
    this.hobbies = this.hobbies.map((hobby: any) => ({name: hobby, selected: false}))
  }

  suggestUsername(){
    const suggestedName = 'superstar';

    this.signUpForm.form.patchValue({
      userData: {
        userName: suggestedName
      }
    })
  }
  

  onSubmit(){
    this.isSubmitted = true;
    this.user.name = this.signUpForm.value.userData.userName;
    this.user.email = this.signUpForm.value.userData.userEmail;
    this.user.gender = this.signUpForm.value.gender;
    this.user.secretQues = `name of your ${this.signUpForm.value.secret}`;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.hobby = this.signUpForm.value.hobby

    this.signUpForm.reset();
  }
}
