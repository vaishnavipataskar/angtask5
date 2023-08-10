import { Injectable } from "@angular/core";
import{ HttpClient }from "@angular/common/http"
import { map } from "rxjs";

@Injectable()

export class HttpHandlerService{
    baseUrl: string = "https://task5-21ed3-default-rtdb.firebaseio.com/user-data.json";
    leaveUrl: string = "https://task5-21ed3-default-rtdb.firebaseio.com/leave-data.json";
  

    constructor(private http : HttpClient){}

    registerUser(loginForm:any){
        return this.http.post(this.baseUrl, loginForm)
    }

   getRegisteredUsers(){
    return this.http.get(this.baseUrl).pipe(map((rawData:any)=>{
        let arr = []
        for(let user in rawData){
            arr.push({...rawData[user], id:user})
        }
        return arr
    }))
   }



   staffLeaves(staffData:any){
    return this.http.post(this.leaveUrl, staffData);
   }
   
   tStaffLeaves(){
    return this.http.get(this.leaveUrl).pipe(map((tSData:any)=>{
        let arr2 = []
        for(let leave in tSData){
            arr2.push({...tSData[leave], leaveId:leave})
        }
        return arr2
    }))
   }

   
   userForId(userId:any){
    return this.http.get("https://task5-21ed3-default-rtdb.firebaseio.com/user-data/"+userId+".json")
   }

   LeaveForId(leaveId:any){
    return this.http.get("https://task5-21ed3-default-rtdb.firebaseio.com/user-data/"+leaveId+".json")
   }

   
   leaveData(leaveData:any){
    return this.http.get("https://task5-21ed3-default-rtdb.firebaseio.com/leave-data/"+leaveData+".json")
   }

   dataForId(leaveObj:any){
    return this.http.patch("https://task5-21ed3-default-rtdb.firebaseio.com/leave-data/"+leaveObj.leaveId+".json", leaveObj)
   }
    //status update 

   userDataForId(userData:any){
    return this.http.patch("https://task5-21ed3-default-rtdb.firebaseio.com/user-data/"+userData.id+".json", userData)
   }
   //patch method 
}