import { Component } from '@angular/core';
import { DataServices } from '../../core/services/dataServices/data-services';
import { CommonModule } from '@angular/common';
import { Loader } from "../../components/loader/loader";

@Component({
  selector: 'app-allusers',
  imports: [CommonModule, Loader],
  templateUrl: './allusers.html',
  styleUrl: './allusers.scss'
})
export class Allusers {


  constructor(private dataservices : DataServices) {}

   users!: any;
  loading = true;
  error = '';
  ngOnInit() {
    this.dataservices.getAllUsers().subscribe(
      {
        next: (res) => {
          console.log(res);

        this.users = res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
      }
    )
  }
}
