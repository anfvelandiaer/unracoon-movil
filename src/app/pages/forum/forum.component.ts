import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Thread, ThreadResponse } from 'src/app/models/forum.model';
import { ForumService } from 'src/app/services/forum.service';
import { IonContent, ModalController } from '@ionic/angular';
import { ThreadFormComponent } from './thread-form/thread-form.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { Router } from '@angular/router';

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
  @ViewChild(IonContent) content: IonContent;

  constructor(
    private forumService: ForumService,
    public modalController: ModalController,
    public router: Router,
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

  doRefresh(event) {
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}
