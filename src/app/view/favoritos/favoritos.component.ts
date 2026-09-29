import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
  imports: [CommonModule],
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
