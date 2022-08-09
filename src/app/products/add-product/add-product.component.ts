import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/site-layout/category';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categoryList : Category[] = [];
  AddForm!: FormGroup;

  constructor(
    private productsService: ProductService,
    private formBuilder:FormBuilder,
    ) { }

  ngOnInit(): void {

    this.productsService.getCaregory().subscribe(data =>{
      this.categoryList.push(data);
      this.categoryList = this.categoryList.flat();
    })
  }
  addNewProduct(){

  }

}
