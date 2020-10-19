import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guards/auth.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { ForumComponent } from './forum/forum.component';
import { SupportComponent } from './support/support.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { ExamsComponent } from './exams/exams.component';

const routes: Routes = [
  {
    path: 'learn',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'learn/perfil', pathMatch: 'full' },
      {
        path: 'perfil',
        component: PerfilComponent,
        data: { titulo: 'Perfil' },
      },
      { path: 'foro', component: ForumComponent, data: { titulo: 'Foro' } },
      {
        path: 'support',
        component: SupportComponent,
        data: { titulo: 'Soporte' },
      },
      {
        path: 'vocabulary',
        component: VocabularyComponent,
        data: { titulo: 'Vocabulario' },
      },
      { path: 'exam', component: ExamsComponent, data: { titulo: 'Examenes' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
