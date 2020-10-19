import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ForumComponent } from './forum/forum.component';
import { ForumDetailComponent } from './forum/forum-detail/forum-detail.component';
import { ThreadFormComponent } from './forum/thread-form/thread-form.component';
import { SupportComponent } from './support/support.component';
import { ExamsComponent } from './exams/exams.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { PagesRoutingModule } from './pages.routing';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SupportFormComponent } from './support/support-form/support-form.component';

@NgModule({
  declarations: [
    PagesComponent,
    PerfilComponent,
    ForumComponent,
    ForumDetailComponent,
    ThreadFormComponent,
    SupportComponent,
    ExamsComponent,
    VocabularyComponent,
    SupportFormComponent,
  ],
  exports: [PagesComponent],
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class PagesModule {}
