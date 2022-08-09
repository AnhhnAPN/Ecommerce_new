import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SiteLayoutModule } from './site-layout/site-layout.module';
import { ProductsModule } from './products/products.module';
import { OdersModule } from './orders/oders.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    SiteLayoutModule,
    ProductsModule,
    OdersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
