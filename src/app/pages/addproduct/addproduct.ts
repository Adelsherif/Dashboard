
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../core/interface/product';

@Component({
  selector: 'app-addproduct',
  imports: [ReactiveFormsModule],
  templateUrl: './addproduct.html',
  styleUrls: ['./addproduct.scss'],
})
export class Addproduct implements OnInit {
  productForm!: FormGroup;
  categories: any[] = [];
  brands: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      sold: [0],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      imageCover: ['', Validators.required],
      images: [''],
    });

    this.categories = [
      { _id: '1', name: "Men's Fashion" },
      { _id: '2', name: "Women's Fashion" },
    ];
    this.brands = [
      { _id: 'b1', name: 'DeFacto' },
      { _id: 'b2', name: 'Zara' },
    ];
  }

  onSubmit() {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
         alert('✅ Product added successfully!')
    }
  }
}
