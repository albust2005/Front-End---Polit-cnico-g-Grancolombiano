import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card-noticia',
  standalone: true,
  imports: [],
  templateUrl: './card-noticia.component.html',
  styleUrl: './card-noticia.component.css'
})

export class CardNoticiaComponent {
  @Input({ required: true, alias: 'titulo' }) titulo = '';
  @Input({ required: true, alias: 'imagen' }) imagen = '';
  @Input({ required: true, alias: 'resumen' }) resumen = '';
}
