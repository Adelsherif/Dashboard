import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  toggle:boolean = true;

  toggleNav(){
    this.toggle = !this.toggle;
  }
  logout(){
    localStorage.removeItem('userToken');
    window.location.reload();
  }
}
