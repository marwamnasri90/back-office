 import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsManagementComponent } from './animals-management/animals-management.component';
import { AddCategorieComponent } from './product-management/categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './product-management/categorie/list-categorie/list-categorie.component';
import { UpdateCategorieComponent } from './product-management/categorie/update-categorie/update-categorie.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddProductComponent } from './product-management/produit/add-product/add-product.component';
import { ListProductComponent } from './product-management/produit/list-product/list-product.component';
import { UpdateProductComponent } from './product-management/produit/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsManagementComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    UpdateCategorieComponent,
    AddProductComponent,
    ListProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
