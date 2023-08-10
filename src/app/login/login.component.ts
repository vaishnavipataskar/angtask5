import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHandlerService } from '../shared/services/httpHandler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {  
  loginForm: FormGroup|any;
  users:any[]=[];

  constructor(private formBuilder: FormBuilder, private httpServe : HttpHandlerService, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.loginForm.controls; }
  
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.httpServe.getRegisteredUsers().subscribe((userData : any)=>{
      this.users = userData;
      // console.log(userData);    

      let modDataUser = this.users.filter(element => {
        // console.log(element);
          return element.username===username && element.password===password
      });      
      // console.log(modDataUser);
      let fullName = `${modDataUser[0]?.fullName.firstName} ${modDataUser[0]?.fullName.lastName}`;

      let modDataForLs ={fullName, id:modDataUser[0]?.id, department:modDataUser[0]?.department, role:modDataUser[0]?.selectPosition};

      let modData = JSON.stringify(modDataForLs); 
      // console.log(modData)
        
      if(modDataUser[0]?.selectPosition==='HOD'){
        localStorage.setItem('myData',modData);
        this.router.navigate(['hodCards'])
      }else if(modDataUser[0]?.selectPosition==='Staff'){
        localStorage.setItem('myData',modData);
        this.router.navigate(['applied-leaves'])
      }else{
        alert('username and passwors is incorrect')
      }
      });
      this.loginForm.reset();   
    } 
    }
