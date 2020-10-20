import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ForumService } from 'src/app/services/forum.service';
import { ThreadResponse } from 'src/app/models/forum.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-thread-form',
  templateUrl: './thread-form.component.html',
  styleUrls: ['./thread-form.component.scss'],
})
export class ThreadFormComponent implements OnInit {
  threadForm;
  constructor(
    private modalCtrl: ModalController,
    private forumService: ForumService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.threadForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      levelId: ['3', Validators.required],
      userName: ['Andres Velandia', Validators.required],
      userId: ['2', Validators.required],
    });
  }

  async sendThread() {
    await this.forumService
      .addThread(this.threadForm.value)
      .subscribe((response: ThreadResponse) => {
        this.dismiss();
      });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
