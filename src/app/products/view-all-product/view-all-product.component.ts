import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

// const productL: Product [] = [
//   {
//     "id": 1,
//     "name": "Party wear Shirt",
//     "category_id": 5,
//     "decriptions": "decription for Party wear Shirt",
//     "price": 300,
//     "is_availble": true,
//     "productImg": "1.jpg",
//     "rating": 4,
//     "review": 150,
//     "vendor_name": "abc shop",
//     "waranty": 1
//   },
//   {
//     "id": 2,
//     "name": "Casual Shirt",
//     "category_id": 2,
//     "decriptions": "decription Casual Shirt",
//     "price": 200,
//     "is_availble": true,
//     "productImg": "1.jpg",
//     "rating": 3,
//     "review": 120,
//     "vendor_name": "xyz shop",
//     "waranty": 1
//   },
//   {
//     "id": 3,
//     "name": "Formal Shirt",
//     "category_id": 4,
//     "decriptions": "decription Formal Shirt",
//     "price": 500,
//     "is_availble": true,
//     "productImg": "1.jpg",
//     "rating": 1,
//     "review": 150,
//     "vendor_name": "aaaa shop",
//     "waranty": 1
//   },
//   {
//     "id": 4,
//     "name": "Summer wear Shirt",
//     "category_id": 5,
//     "decriptions": "decription for Party wear Summer",
//     "price": 300,
//     "is_availble": true,
//     "productImg": "1.jpg",
//     "rating": 4,
//     "review": 150,
//     "vendor_name": "abc shop",
//     "waranty": 1
//   },
//   {
//     "id": 5,
//     "name": "Winter Shirt",
//     "category_id": 2,
//     "decriptions": "decription Casual Winter",
//     "price": 200,
//     "is_availble": true,
//     "productImg": "1.jpg",
//     "rating": 3,
//     "review": 120,
//     "vendor_name": "xyz shop",
//     "waranty": 1
//   },
//   {
//     "id": 6,
//     "name": "Swing Shirt",
//     "category_id": 4,
//     "decriptions": "decription Formal Swing",
//     "price": 500,
//     "is_availble": true,
//     "productImg": "1.jpg",
//     "rating": 1,
//     "review": 150,
//     "vendor_name": "aaaa shop",
//     "waranty": 1
//   }
// ]

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList: Product[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.productService.viewAllProduct().subscribe(data =>{
      this.productList.push(data);
      this.productList = this.productList.flat();

    })
  }

}
