import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  connected : boolean;
  navbarOpen: boolean;

  constructor() { }

  ngOnInit(): void {
    this.connected = false;

    this.navbarOpen = false;
  }
  
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

}
