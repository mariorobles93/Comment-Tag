import { Injectable } from '@angular/core';
import {Comment} from "../../Interfaces/comment";
import {UserService} from "../User/user.service";
import {User} from "../../Interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private readonly comments: Comment[] = [];
  private userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
    this.comments = [
      {
        id: 1,
        userID: 11,
        name: '',
        content: 'Started working on the task.',
        timestamp: new Date('2024-08-24T09:15:00'),
      },
      {
        id: 2,
        userID: 22,
        name: '',
        content: 'Reviewed the initial code. Looks good so far.',
        timestamp: new Date('2024-08-24T10:30:00'),
      },
      {
        id: 3,
        userID: 33,
        name: '',
        content: 'Need clarification on the requirements.',
        timestamp: new Date('2024-08-24T11:45:00'),
      },
      {
        id: 4,
        userID: 44,
        name: '',
        content: 'Fixed the bugs in the comments service.',
        timestamp: new Date('2024-08-24T13:00:00'),
      },
      {
        id: 5,
        userID: 55,
        name: '',
        content: 'Updated the documentation for the service.',
        timestamp: new Date('2024-08-24T14:15:00'),
      },
      {
        id: 6,
        userID: 66,
        name: '',
        content: 'Tested the comments service. All tests passed.',
        timestamp: new Date('2024-08-24T15:30:00'),
      },
      {
        id: 7,
        userID: 77,
        name: '',
        content: 'Integrated the comments service with the task card.',
        timestamp: new Date('2024-08-24T16:45:00'),
      },
      {
        id: 8,
        userID: 88,
        name: '',
        content: 'Deployed the service to the staging environment.',
        timestamp: new Date('2024-08-24T18:00:00'),
      },
      {
        id: 9,
        userID: 99,
        name: '',
        content: 'Performed code review. Suggested minor improvements.',
        timestamp: new Date('2024-08-24T19:15:00'),
      },
      {
        id: 10,
        userID: 100,
        name: '',
        content: 'Finalized the comments service. Ready for production.',
        timestamp: new Date('2024-08-24T20:30:00'),
      },

    ];
  }

  getComments() : Comment[]{
    let user : User;
    this.comments.forEach((comment : Comment)=>{
      user = this.userService.getById(comment.userID)!;
      comment.name = user.name;
    });
    //TODO: Add HTTP Call and error handling;
    return this.comments;
  }

  addComment(comment: Comment) {
    //TODO: Add HTTP Call and error handling;
    this.comments.push(comment);
  };

  private removeComment(comment: Comment) {
    //TODO: Implement
  }
}
