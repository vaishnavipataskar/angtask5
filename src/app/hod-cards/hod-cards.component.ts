import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../shared/services/httpHandler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hod-cards',
  templateUrl: './hod-cards.component.html',
  styleUrls: ['./hod-cards.component.css']
})

export class HodCardsComponent implements OnInit{
  staffLeave :any[]=[];
  staffLInfo:any[]=[];
  user:any[]=[];
  userObj:any;

  constructor(private httpServe:HttpHandlerService, private router:Router){}

  ngOnInit(): void {
    this.httpServe.tStaffLeaves().subscribe((data)=>{
      this.staffLeave=data;
      console.log(data);
      const data1 =localStorage.getItem('myData')??'';
      const data2 = JSON.parse(data1);
      console.log(data2)     
      this.staffLInfo =this.staffLeave.filter(ele=>{
        console.log(ele)
        return ele.department===data2.department
      })
      console.log(this.staffLInfo);
    })  
  }

    approve(leaveId:any, id:any){
      let leaveObj={leaveId:leaveId, status:'approve'}
      this.httpServe.dataForId(leaveObj).subscribe((val:any)=>{
        console.log(val.status); 
        //get method >>get leave (leavedays)>>use leaveId>>subscription >>get use id >>person(user>>totaldayas)>>createobject>>leavaId:id,totalleaves:valtotalLeaves-parram.leavvedays>>patch method call>>pass object id line number 36    
            this.httpServe.leaveData(leaveId).subscribe((leaveData:any)=>{
              console.log(leaveData.totaldays)   //8
              let obj = {id : id , totalDays : leaveData.totaldays}
              console.log(obj);
                    this.httpServe.LeaveForId(id).subscribe((data:any)=>{
                      console.log(data)  //20
                      let userObj = {id : id , totalLeaves : data.totalLeaves-leaveData.totaldays}
                      console.log(userObj)
                      this.httpServe.userDataForId(userObj).subscribe((userData:any)=>{
                        console.log(userData)
                      })
                  }) 
          })         
      })
     
      //get method call user >> totalleaves >> subscription madhe line 52 >> totalLeaves(20)  >>> tatalleaves - approvedays   
      // console.log(leaveId,id)
      
    }

    reject(leaveId:any){
      console.log(leaveId)
      let obj ={ leaveId:leaveId, status:'reject'}
      this.httpServe.dataForId(obj).subscribe((val)=>{
        console.log(val)
      })
    }
  }
