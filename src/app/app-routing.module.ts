import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DogparksComponent } from './dogparks/dogparks.component';
import { DogparksResolver } from './dogparks.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dogparks',
    pathMatch: 'full'
  },
  {
    path: 'dogparks',
    component: DogparksComponent,
    resolve: {
      dogparks: DogparksResolver
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    DogparksResolver
  ]
})
export class AppRoutingModule {
}
