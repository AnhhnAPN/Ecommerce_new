import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/site-layout/category';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categoryList : Category[] = [];
  AddForm!: FormGroup;
  product!: Product;

  constructor(
    private productsService: ProductService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {

    this.AddForm = this.formBuilder.group({
      name:[''],
      category_id:[''],
      decriptions:[''],
      price:[''],
      is_availble:['true'],
      rating:[''],
      vendor_name:[''],
      waranty:[''],

    })

    this.productsService.getCaregory().subscribe(data =>{
      this.categoryList.push(data);
      this.categoryList = this.categoryList.flat();
    })
  }
  addNewProduct(){
    this.product = this.AddForm.value;
    this.productsService.createProduct(this.product).subscribe(data =>{
      // console.log(data);
      alert("Success add product!");
      this.AddForm.reset();
    },
    error => {alert("Fail to add product!");}
    )
  }

}
