import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHandlerService } from '../shared/services/httpHandler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup|any;

  constructor(private formBuilder: FormBuilder, private httpServe:HttpHandlerService, private router:Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      fullName:this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      }),      
      selectPosition: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      department: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.form.controls; }
  
  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value.selectPosition);  //all form values

    this.httpServe.registerUser({...this.form.value,totalLeaves:20}).subscribe((data:any)=>{
      console.log(data) //object with name key
    })   

    alert('registration successfull !!!')

    this.router.navigate(['login'])

  }
  }