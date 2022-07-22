 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class ProductService { 

  API_URI = 'http://localhost:3000/api/product';
    constructor(private http: HttpClient) { }
 
    createProduct(resource:any){
  return this.http.post(`${this.API_URI}/createProduct`,resource);
} 

getAllProduct(){
  return this.http.get(`${this.API_URI}/allProduct`);
}
getSingleProduct(id:any){
  return this.http.get(`${this.API_URI}/singleProduct/`+id);

}
deleteProduct(id:any){
  return this.http.delete(`${this.API_URI}/deleteProduct/`+id);

}
updateProduct(id:any,resource:any){
  return this.http.put(`${this.API_URI}/updateProduct/`+id,resource);

}

filter(resource:any){
  console.log(resource);
  
  return this.http.get(`${this.API_URI}/filter/`+resource.categorie+'/'+resource.prixmin+'/'+resource.prixmax+'/'+resource.sort);

}
   
}