import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']   
})
export class Header {

  token!: string;
  userName!: string;

  constructor() {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      this.token = storedToken;
      const decoded: any = jwtDecode(this.token);
      this.userName = decoded.name;
    }
  }
}
