import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/services/support.service';
import { Ticket, TicketResponse } from 'src/app/models/support.model';
import { ModalController } from '@ionic/angular';
import { SupportFormComponent } from './support-form/support-form.component';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  tickets: Ticket[];

  constructor(
    private supportService: SupportService,
    public modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.supportService
      .getAllTickets()
      .subscribe((response: TicketResponse) => {
        this.tickets = response.data.allTickets;
      });
  }

  async presentFormModal() {
    const modal = await this.modalController.create({
      component: SupportFormComponent,
    });
    return await modal.present();
  }
}
