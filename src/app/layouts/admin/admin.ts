import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [Navbar,RouterOutlet],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin {

}
