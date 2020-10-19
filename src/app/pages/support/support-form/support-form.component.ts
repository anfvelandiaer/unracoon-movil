import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SupportService } from 'src/app/services/support.service';

@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.scss'],
})
export class SupportFormComponent implements OnInit {
  ticketForm;

  constructor(
    private supportService: SupportService,
    private fb: FormBuilder,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.ticketForm = this.fb.group({
      response: ['pending', Validators.required],
      issue: ['', Validators.required],
      section: ['', Validators.required],
      userName: ['Andres Velandia', Validators.required],
    });
  }

  sendTicket() {
    this.supportService
      .addTicket(this.ticketForm.value)
      .subscribe((response) => {
        console.log(response);
      });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
