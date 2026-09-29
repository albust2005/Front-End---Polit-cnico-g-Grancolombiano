import { Routes } from '@angular/router';
import { NoticiasComponent } from './view/noticias/noticias.component';
import { HomeComponent } from './view/home/home.component';
import { FavoritosComponent } from './view/favoritos/favoritos.component';

export const routes: Routes = [
  { path: 'noticias', component: NoticiasComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: '', component: HomeComponent}
];