import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './component/common/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      // form routing
      {
        path: 'form',
        loadChildren: () =>
          import(
            './component/form/routing/form-routing/form-routing.module'
          ).then((m) => m.FormRoutingModule),
      },
      // list routing
      {
        path: 'list',
        loadChildren: () =>
          import('./component/list/list-routing/list-routing.module').then(
            (m) => m.ListRoutingModule
          ),
      },
      { path: '', redirectTo: 'form', pathMatch: 'full' },
    ],
  },
  /* authentication routing */
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/routing/routing.module').then((m) => m.RoutingModule),
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
