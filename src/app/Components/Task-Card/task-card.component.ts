import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardSubtitle} from "@angular/material/card";
import {CommentsComponent} from "../comment/comments.component";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardFooter,
    CommentsComponent,
    MatDivider
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {

}
