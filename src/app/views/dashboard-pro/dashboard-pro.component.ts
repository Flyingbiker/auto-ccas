import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-dashboard-pro',
  templateUrl: './dashboard-pro.component.html',
  styleUrls: ['./dashboard-pro.component.scss']
})
export class DashboardProComponent implements OnInit {

  public proConnected : string = 'Aymeric';

  constructor(private proService : UserService) { }

  ngOnInit(): void {
  }

}
