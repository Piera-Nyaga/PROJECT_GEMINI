import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { User } from 'src/app/Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User[]=[]

  constructor() { }

  register(user: User): void {
    this.user.push(user);
    console.log(this.user);
  }
}

  // isLoggedIn=false
  

  // getAuthStatus():Promise<boolean>{
  //   const promise = new Promise<boolean>((resolve,reject)=>{
  //   setTimeout(()=>{
  //     resolve(this.isLoggedIn)
  //   },10)
  //   })
  //   return promise;
  // }

  // login(){
  //   this.isLoggedIn=true
  // }

  // logout(){
  //   this.isLoggedIn=false;
  // }
