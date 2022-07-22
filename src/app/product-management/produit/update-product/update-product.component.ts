import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
 import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/service/categorie.service';
import { ProductService } from 'src/app/service/produc.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  categories: any = []
  matrialForm: FormGroup;
  id: any;
  constructor(private prodcutService: ProductService,
    private toastr: ToastrService, private route: ActivatedRoute, private formBuilder: FormBuilder, private categorieService: CategorieService, private router: Router,
  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.allCategorie()
    this.matrialForm = this.formBuilder.group({
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

    this.prodcutService.getSingleProduct(this.id).subscribe((res: any) => {
      this.matrialForm.patchValue({
        'title': res.result.title,
        'state': res.result.state,
        'code': res.result.code,
        'price': res.result.price,
        'stock': res.result.stock,
        'new': res.result.new,
        'promo': res.result.promo.rate,
        'description': res.result.description,
        'categories': res.result.categorie,

      })
    })
  }

  allCategorie() {
    this.categorieService.getAllCatgorie().subscribe((res: any) => {
      this.categories = res.result
    })
  }
  onSubmit() {
    this.prodcutService.updateProduct(this.id, this.matrialForm.value).subscribe((res: any) => {
      this.toastr.success('Produit Modifier avec succe!', 'Notification!');
      this.matrialForm.reset()
      this.router.navigate(['/liste-matrial'])
    })

}
}