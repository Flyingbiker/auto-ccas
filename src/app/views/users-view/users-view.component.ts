import { UserService } from './../../services/user/user.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements OnInit {

  usersTest : Array<User>;

  constructor(private userService : UserService,) { 

  }

  ngOnInit(): void {
    this.usersTest = this.userService.usersArray;
  }

}
