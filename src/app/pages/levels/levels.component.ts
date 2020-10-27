import { Component, OnInit } from '@angular/core';
import { LevelsService } from 'src/app/services/levels.service';
import { Classification, ClassificationResponse } from 'src/app/models/levels.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss'],
})
export class LevelsComponent implements OnInit {

  classification: Classification[];
  classificationSelected: Classification;
  showClassification = false;
  //showWords = false;
  classificationForm;

  constructor(
    private levelsService: LevelsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.levelsService
      .getAllClassification()
      .subscribe((response: ClassificationResponse) => {
        this.classification = response.data.allClassification;
        console.log(response);
      });
    this.classificationForm = this.fb.group({
      response: ['', Validators.required],
    });
  }

  toggleClassification() {
    this.showClassification = !this.showClassification;
  }
}