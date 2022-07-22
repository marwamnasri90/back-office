import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/service/categorie.service';
import { ProductService } from 'src/app/service/produc.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public sortings = [{ id: 1, txt: 'Le moins cher' }, { id: -1, txt: 'Le plus cher' }, { id: 'stock', txt: 'En stock' }, { id: 'AZ', txt: 'Nom A à Z' }, { id: 'ZA', txt: 'Nom Z à A' }];

  categories: any = []
  filterForm: FormGroup;
  produits:any=[]
  constructor( private formBuilder: FormBuilder,private categorieService: CategorieService,private productService:ProductService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.allCategorie()
     this.allProduct()
     this.filterForm = this.formBuilder.group({
      categorie: ['', Validators.required],
     prixmin: [0, Validators.required],
     prixmax: [0, Validators.required],
     sort: ['', Validators.required],

 
   })
  }
  allProduct(){
    this.productService.getAllProduct().subscribe((res:any)=>{
      this.produits=res.result
    })
  }
  
  allCategorie() {
    this.categorieService.getAllCatgorie().subscribe((res: any) => {
      this.categories = res.result
    })
  }
  delete(id:any){
    Swal.fire({
      title: 'Êtes-vous sûr?',
       icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le !'
    }).then((result) => {
      if (result.isConfirmed) {
    this.productService.deleteProduct(id).subscribe((res:any)=>{
      this.toastr.success('Produit Supprime avec succe!', 'Notification!');
      this.allProduct()
    })
      }
    })
  }
  onSubmit(){
    this.productService.filter(this.filterForm.value).subscribe((res: any) => {
      this.produits=res.result
     })
  }
}