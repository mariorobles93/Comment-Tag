import { Injectable } from '@angular/core';
import {User} from "../../Interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users : User[] =  [
    {
      userID: 11,
      name: 'Alice',
    },
    {
      userID: 22,
      name: 'Bob',
    },
    {
      userID: 33,
      name: 'Charlie',
    },
    {
      userID: 44,
      name: 'David',
    },
    {
      userID: 55,
      name: 'Eve',
    },
    {
      userID: 66,
      name: 'Frank',
    },
    {
      userID: 77,
      name: 'Grace',
    },
    {
      userID: 88,
      name: 'Hank',
    },
    {
      userID: 99,
      name: 'Ivy',
    },
    {
      userID: 100,
      name: 'Jack',
    },
    {
      userID: 101,
      name: 'New Comment User',
    }
  ];

  constructor() { }

  get(){
    return this.users;
  }

  getById(id: number) {
    return this.users.find((user)=>{
      return user.userID === id;
    });
  }

  searchUsers(query: string){
    return this.users.filter((user: User)=> {
      //TODO: Sort alphabetically
      return user.name.toLowerCase().includes(query.toLowerCase());
    });
  }

}


