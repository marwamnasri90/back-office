 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsManagementComponent } from './animals-management/animals-management.component';
import { AppComponent } from './app.component';
import { AddCategorieComponent } from './product-management/categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './product-management/categorie/list-categorie/list-categorie.component';
import { UpdateCategorieComponent } from './product-management/categorie/update-categorie/update-categorie.component';
import { AddProductComponent } from './product-management/produit/add-product/add-product.component';
import { ListProductComponent } from './product-management/produit/list-product/list-product.component';
import { UpdateProductComponent } from './product-management/produit/update-product/update-product.component';

const routes: Routes = [
  {
  path:"",component:AddCategorieComponent
},
{
  path:"addCategorie",component:AddCategorieComponent  
},
{
  path:"listCategorie",component:ListCategorieComponent  
}, 
{
  path:'update-categorie/:id',component:UpdateCategorieComponent
},
{
  path:"listProduct",component:ListProductComponent  
},{
  path:"addProduct",component:AddProductComponent  
},
{
  path:"update-product/:id",component:UpdateProductComponent
}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
