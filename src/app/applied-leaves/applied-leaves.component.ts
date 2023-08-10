import { Component } from '@angular/core';
import { HttpHandlerService } from '../shared/services/httpHandler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applied-leaves',
  templateUrl: './applied-leaves.component.html',
  styleUrls: ['./applied-leaves.component.css']
})
export class AppliedLeavesComponent {
  staffLeave :any[]=[];
  staffLInfo:any[]=[];
  showCard: boolean = true;
  totalLeaves: any;
  date1:Date|any;
  date2:Date|any;
  differenceInDays:any;
  reLeaves:any;
  approve:number|any;
  reject:number|any;
  pending:number|any;

  constructor(private httpServe:HttpHandlerService, private router:Router){}

  ngOnInit(): void {
     this.getLeaveData();
    }
    getLeaveData(){
      this.httpServe.tStaffLeaves().subscribe((data: any[])=>{
        this.staffLeave=data;
        console.log(data);
        
      const data1 =localStorage.getItem('myData')??'';
      const data2 = JSON.parse(data1);
      console.log(data2)
        
        this.staffLInfo =this.staffLeave.filter(ele=>{
          console.log(ele)
          return ele.id===data2.id
        })
  
       console.log('aksjsdfh',this.staffLInfo[0].id)

        // this.httpServe.userForId(this.staffLInfo[0].id).subscribe((param:any)=>{
        //   console.log(param.tatalleaves)         
        // })

          this.httpServe.LeaveForId(this.staffLInfo[0].id).subscribe((leaveData:any)=>{
            console.log(leaveData.totalLeaves);
            this.staffLInfo.forEach((data)=>{    
                  console.log(leaveData.totalLeaves)
                  console.log(data.totaldays)
                      if(data.status==='approve'){
                        this.totalLeaves = leaveData.totalLeaves;  //20-8=12
                        console.log(this.totalLeaves)
                         this.approve = data.totaldays;
                      }else if(data.status==='pending'){
                        this.totalLeaves = leaveData.totalLeaves-data.totaldays;  //20-2=18
                        this.pending= data.totaldays;  
                      }else if(data.status==='reject'){
                        this.totalLeaves=leaveData.totalLeaves; //20
                        this.reject= data.totaldays;
                      }else{
                        this.totalLeaves;
                        this.approve=0;
                        this.reject=0;
                        this.pending=0;
                      }
                })
             })
        })

       
      
      // for(let i=0; i<=this.staffLInfo.length; i++){
      //   console.log(this.staffLInfo[i]);   
     
      // }         



    
    }
   }