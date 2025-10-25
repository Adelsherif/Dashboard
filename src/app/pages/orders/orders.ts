import { Component } from '@angular/core';
import { DataServices } from '../../core/services/dataServices/data-services';
import { Order } from '../../core/interface/order';
import { Loader } from '../../components/loader/loader';

@Component({
  selector: 'app-orders',
  imports: [Loader],
  templateUrl: './orders.html',
  styleUrl: './orders.scss'
})
export class Orders {

  orders! : Order[];
  loading:boolean = true;
  orderNumbers!:number;

  constructor(private ordersServices:DataServices) { }

  ngOnInit(): void {
    this.ordersServices.getAllOrders().subscribe(
      {
        next:(response:any)=>{
          this.loading = false;
          this.orders = response.data;
          this.orderNumbers = this.orders.length;
        },
        error:()=>{ this.loading = false;   },
        complete:()=>{ this.loading = false;}
      }
  )
  }

}
