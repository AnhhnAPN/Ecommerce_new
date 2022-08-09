import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Category } from 'src/app/site-layout/category';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {

  searchCategoryId:number = 0;
  productList: Product[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.searchCategoryId = data['id'];

      this.productService.searchCategoryProduct(this.searchCategoryId).subscribe(data =>{
        this.productList.push(data);
        this.productList = this.productList.flat();
      })
    })
  }
}
