import { Component, OnInit, Input } from '@angular/core';

import { Comment } from '../../models/comment';

@Component({
  selector: 'profile-comments',
  templateUrl: './profile-comments.component.html',
  styleUrls: ['./profile-comments.component.css']
})
export class ProfileCommentsComponent implements OnInit {

  constructor() { }

  @Input() comments: Comment[];

  ngOnInit() {
  }

}
