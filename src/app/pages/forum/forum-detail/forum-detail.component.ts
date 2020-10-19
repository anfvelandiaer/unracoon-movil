import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Entry, EntryResponse, Thread } from 'src/app/models/forum.model';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.scss'],
})
export class ForumDetailComponent implements OnInit {
  @Input() thread: Thread;
  public entryForm;

  constructor(
    private forumService: ForumService,
    private fb: FormBuilder,
    private modalCtrl: ModalController
  ) {}

  entrys: Entry[];
  ngOnInit(): void {
    this.entryForm = this.fb.group({
      message: ['', Validators.required],
      threadId: [this.thread._id, Validators.required],
      userName: ['Andres Velandia', Validators.required],
      userId: ['2', Validators.required],
    });
    this.forumService
      .getEntrysThread(this.thread._id)
      .subscribe((data: EntryResponse) => {
        this.entrys = data.data.entryThread;
      });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  sendEntry() {
    this.forumService
      .addEntry(this.entryForm.value)
      .subscribe((response: EntryResponse) => {
        console.log(response.data.createEntry);
      });
  }
}
