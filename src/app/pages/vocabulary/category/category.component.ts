import { Component, Input, OnInit } from '@angular/core';
import { VocabularyService } from 'src/app/services/vocabulary.service';
import { Category, CategoryResponse } from 'src/app/models/vocabulary.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  //@Input() category: Category;
  category: Category[];
  public categoryForm;
  //formVisible = false;

  constructor(
    private vocabularyService: VocabularyService,
    private fb: FormBuilder,
    private modalController: ModalController
  ) { }
  
  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
    });

    this.vocabularyService.getAllCategory().subscribe((response: CategoryResponse) => {
      this.category = response.data.allCategory;
    });
  }

  async sendCategory() {
    await this.vocabularyService.addCategory(this.categoryForm.value).subscribe((response) => {
      console.log(response);
    });
  }
  
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  
  showForm() {
    //this.formVisible = true;
  }
}