import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHandlerService } from '../shared/services/httpHandler.service';

@Component({
  selector: 'app-staff-leaves',
  templateUrl: './staff-leaves.component.html',
  styleUrls: ['./staff-leaves.component.css']
})
export class StaffLeavesComponent {  
  @ViewChild('text')text:any | ElementRef;
  Leavesend:any;
  
  constructor(private router:Router, private HttpServe:HttpHandlerService){}

  formObj = new FormGroup({
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
  }); 

    leaveDiff(start:any,end:any){
          let newDate1=new Date(start).getTime();
          let newDate2=new Date(end).getTime();
          let differenceInTime = (newDate2 - newDate1)/ (1000 * 3600 * 24);
          return differenceInTime
    }

  onSubmit(){
    this.Leavesend=this.formObj.value;

    const data1 =localStorage.getItem('myData')??'';
    const data2 = JSON.parse(data1)

    console.log(this.leaveDiff(this.formObj.value.start,this.formObj.value.end))

this.HttpServe.staffLeaves({data:this.Leavesend,...data2,status:'pending',totaldays:this.leaveDiff(this.formObj.value.start,this.formObj.value.end)}).subscribe((data)=>{
  console.log(data)  //name id 
  console.log(data2) //ls data  
  this.router.navigate(['applied-leaves'])
  
  let date1=this.formObj.value.start;
  console.log(date1)
  let date2=this.formObj.value.end;

          


})
  }

  cancelLeave(){
    this.router.navigate(['login']);

    
  }
  
}