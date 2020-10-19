import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Thread, ThreadResponse } from 'src/app/models/forum.model';
import { ForumService } from 'src/app/services/forum.service';
import { ModalController } from '@ionic/angular';
import { ThreadFormComponent } from './thread-form/thread-form.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
})
export class ForumComponent implements OnInit {
  threadsSubscription: Subscription;
  threads: Thread[];
  threadSelected: Thread;
  formVisible = false;

  constructor(
    private forumService: ForumService,
    public modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.threadsSubscription = this.forumService
      .getAllThreads()
      .subscribe((response: ThreadResponse) => {
        this.threads = response.data.allThreads;
      });
  }

  showForm() {
    this.formVisible = true;
  }

  async presentFormModal() {
    const modal = await this.modalController.create({
      component: ThreadFormComponent,
    });
    return await modal.present();
  }

  async presentDetailModal(thread: Thread) {
    this.threadSelected = thread;
    const modal = await this.modalController.create({
      component: ForumDetailComponent,
      componentProps: {
        thread,
      },
    });
    return await modal.present();
  }
}
