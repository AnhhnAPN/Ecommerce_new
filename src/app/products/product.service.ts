import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Product } from './product';
import {Category} from '../site-layout/category'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient
  ) { }

  createProduct(productBody:any):Observable<Product>{
    return this.http.post<Product>(env.baseUrl+'products', productBody);
  }


  updateProduct(productId:any, productBody:any):Observable<Product>{
    return this.http.put<Product>(env.baseUrl+'product/'+productId, productBody);
  }
  deleteProduct(productId:any):Observable<Product>{
    return this.http.delete<Product>(env.baseUrl+'product/'+ productId);
  }
  searchCategoryProduct(categoryId:number):Observable<Product>{
    return this.http.get<Product>(env.baseUrl+'product?category_id='+ categoryId);
  }
  searchDateProduct(dateParam:any):Observable<Product>{
    return this.http.get<Product>(env.baseUrl+'product/date='+ dateParam);
  }
  viewProduct(idProduct:number):Observable<Product>{
    return this.http.get<Product>(env.baseUrl+'product/'+idProduct);
  }

  viewAllProduct():Observable<Product>{
    return this.http.get<Product>(env.baseUrl+'product/');
  }
  // viewProductbyCat():Observable<Product>{
  //   return this.http.get<Product>(env.baseUrl+'product/');
  // }

  getCaregory():Observable<Category>{
    return this.http.get<Category>(env.baseUrl+'categories/');
  }
}
