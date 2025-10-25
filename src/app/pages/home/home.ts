import { Component } from '@angular/core';
import { Statistics } from "../../components/statistics/statistics";
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ Statistics,Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
