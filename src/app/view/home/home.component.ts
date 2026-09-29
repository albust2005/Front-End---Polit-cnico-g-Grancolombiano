import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface Destacado {
  id: number;
  titulo: string;
  imagen: string;
  categoria: string;
  resumen: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  noticias: Destacado[] = [];
  noticiaPrincipal!: Destacado;
  noticiasSecundarias: Destacado[] = [];

  async ngOnInit() {

    const respuesta = await fetch('assets/data/noticias.json');
    this.noticias = await respuesta.json();

    if (this.noticias.length > 0) {
      this.noticiaPrincipal = this.noticias[0];
      this.noticiasSecundarias = this.noticias.slice(1, 4);
    }
  }
}
