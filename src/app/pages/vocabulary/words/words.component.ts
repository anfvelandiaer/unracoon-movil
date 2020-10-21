import { Component, OnInit } from '@angular/core';
import { VocabularyService } from 'src/app/services/vocabulary.service';
import { Words, WordsResponse } from 'src/app/models/vocabulary.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  words: Words[];
  public wordsForm;
  //formVisible = false;

  constructor(
    private vocabularyService: VocabularyService,
    private fb: FormBuilder,
    private modalController: ModalController
  ) { }

  ngOnInit(): void {
    this.wordsForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
      linkW: ['', Validators.required],
      meaning: ['', Validators.required]
    });

    this.vocabularyService.getAllWords().subscribe((response: WordsResponse) => {
      this.words = response.data.allWords;
    });
  }

  async sendWord() {
    await this.vocabularyService.addWord(this.wordsForm.value).subscribe((response) => {
      console.log(response);
    });
    //console.log(this.wordsForm.value)
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