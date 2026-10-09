import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardNoticiaComponent } from '../../components/card-noticia/card-noticia.component';

interface Noticia {
  id: number;
  titulo: string;
  imagen: string;
  categoria: string;
  resumen: string;
}

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, CardNoticiaComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
  favoritos: Noticia[] = [];

  async ngOnInit() {
    const respuesta = await fetch('assets/data/noticias.json');
    const noticias: Noticia[] = await respuesta.json();
    this.favoritos = noticias.slice(0, 2);
  }
}
