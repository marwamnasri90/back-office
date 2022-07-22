import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  categorieForm:FormGroup;
  constructor(private toastr: ToastrService,private formBuilder:FormBuilder,private categorieService:CategorieService,private router:Router
   ) { }
  ngOnInit(): void {
    this.categorieForm= this.formBuilder.group({
      name: ['', Validators.required],
    })
  }
  onSubmit() {
    this.categorieService.createCategorie(this.categorieForm.value).subscribe((res: any) => {
      this.toastr.success('Categorie Ajoute avec succes!', 'Notification!');
      this.categorieForm.reset()
     this.router.navigate(['/listCategorie'])
    }) 
  }
}
