import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  { path: '', redirectTo: 'learn/perfil', pathMatch: 'full' },
    { path: 'learn', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    AuthRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
