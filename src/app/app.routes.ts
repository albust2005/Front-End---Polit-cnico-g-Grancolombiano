import { Routes } from '@angular/router';
import { NoticiasComponent } from './view/noticias/noticias.component';
import { HomeComponent } from './view/home/home.component';

export const routes: Routes = [
  { path: 'noticias', component: NoticiasComponent },
  { path: '', component: HomeComponent}
];