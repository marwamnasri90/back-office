import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/service/categorie.service';
import { ProductService } from 'src/app/service/produc.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm:FormGroup;
  categories: any = []
  file: any;

  constructor(private productService:ProductService,
    private toastr: ToastrService, private formBuilder: FormBuilder, private categorieService: CategorieService, private router: Router,
  ) { }

  ngOnInit(): void {
    this.allCategorie()
    this.productForm = this.formBuilder.group({
       title: ['', Validators.required],
      state: ['', Validators.required],
      code: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      new: ['', Validators.required],
      promo: ['', Validators.required],
      description: ['', Validators.required],
       categories: ['', Validators.required],
    })
  }
  onChange(event: any) {
    this.file = event.target.files[0];
  }
  allCategorie() {
    this.categorieService.getAllCatgorie().subscribe((res: any) => {
      this.categories = res.result
    }) 
  }
  onSubmit() {

 
const formData = new FormData(); 
        
// Store form name as "file" with file data
formData.append("image",this.file );
formData.append("title",this.productForm.value.title);
formData.append("state",this.productForm.value.state );
formData.append("code",this.productForm.value.code );
formData.append("price",this.productForm.value.price );
formData.append("stock",this.productForm.value.stock);
formData.append("promo",this.productForm.value.promo);
formData.append("new",this.productForm.value.new);

formData.append("description",this.productForm.value.description );
formData.append("categories",this.productForm.value.categories );


    this.productService.createProduct( formData).subscribe((res: any) => {
      this.toastr.success('Product Ajouter avec succes!', 'Notification!');
      this.productForm.reset()
      this.router.navigate(['/listProduct'])
    })
  }
  


}