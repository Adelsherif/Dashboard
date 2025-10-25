import { Component } from '@angular/core';
import { Product } from '../../core/interface/product';
import { DataServices } from '../../core/services/dataServices/data-services';
import { Loader } from '../../components/loader/loader';

@Component({
  selector: 'app-products',
  imports: [Loader],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  allproducts!:Product[];

  constructor(private productsServices:DataServices) {}

  ngOnInit(): void {

    this.productsServices.getAllProducts().subscribe((res:any)=>{
      this.allproducts=res.data;
      console.log(this.allproducts);
    }
  )
  }


}
