import { Component } from '@angular/core';
import {CommentsService} from "../../Services/Comments/comments.service";
import {Comment} from "../../Interfaces/comment";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";
import {MatFormField , MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {UserService} from "../../Services/User/user.service";
import {User} from "../../Interfaces/user";
import {NotificationService} from "../../Services/Notification/notification.service";
import {Notification} from "../../Interfaces/notification";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    NgForOf,
    MatIcon,
    DatePipe,
    MatDivider,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    NgIf
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  public commentsService: CommentsService;
  public userService: UserService;
  public notificationService: NotificationService;

  public comments: Comment[] = [];
  public newComment : Comment = {} as Comment;
  public showSuggestions : boolean = false;
  public suggestions: User[]=[];

  constructor(
    commentsService: CommentsService,
    userService: UserService,
    notificationService: NotificationService) {
    this.commentsService = commentsService;
    this.userService = userService;
    this.notificationService = notificationService;

    this.comments = this.commentsService.getComments();
  }

  addComment() {
    let comment: Comment = {
      id: Math.floor(Math.random() * 100),
      userID: 101,
      name: 'Mario',
      content: this.newComment.content,
      timestamp: new Date(),
      tags: this.newComment.tags
    }
    this.commentsService.addComment(comment);
    this.newComment = {} as Comment;
  }

  onInput(event : any){
    const input  = event.target.value as String;

    if (input.includes('@')) {
      this.showSuggestions = true;
      this.suggestions = this.getSuggestions(input.split('@').pop()!.trim());
    }else{
      this.showSuggestions = false;
    }
  }

  getSuggestions(query: string){
    return this.userService.searchUsers(query);
  }

  tagUser(user: User){
    this.newComment.tags?.push(user);
    this.newComment.content += user.name;

    let newNotification: Notification = {
      id:  Math.floor(Math.random() * 100),
      recipientUserID: user.userID,
      message: this.newComment.content,
      timestamp: new Date()
    }

    this.notificationService.sendNotification(newNotification);

    this.showSuggestions = false;
  }

  removeTagUser(user: User){
    //TODO: Remove tagged user
  }
}
